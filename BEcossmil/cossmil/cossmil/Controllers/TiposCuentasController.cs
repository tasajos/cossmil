using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiposCuentasController : ControllerBase
    {
        private readonly FarContext _context;

        public TiposCuentasController(FarContext context)
        {

            //Contabilidad
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listatiposcuentas = await _context.TiposCuentasCont.ToListAsync();
                return Ok(listatiposcuentas);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }

        [HttpPost]

        public async Task<IActionResult> Post(tiposcuentas TiposCuentasCont)
        {
            try
            {
                TiposCuentasCont.FechaCreacion = DateTime.Now;
                _context.Add(TiposCuentasCont);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = TiposCuentasCont.id }, TiposCuentasCont);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }


    }
}
