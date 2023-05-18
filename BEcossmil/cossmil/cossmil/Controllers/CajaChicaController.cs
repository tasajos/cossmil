using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;


namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CajaChicaController : ControllerBase
    {
        private readonly FarContext _context;

        public CajaChicaController(FarContext context)
        {

            //CajaChica
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listcajachica = await _context.Cajachica.ToListAsync();
                return Ok(listcajachica);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }

        [HttpPost]

        public async Task<IActionResult> Post(contabilidad_cajachica Cajachica)
        {
            try
            {
                Cajachica.FechaCreacion = DateTime.Now;
                _context.Add(Cajachica);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Cajachica.id }, Cajachica);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }



    }
}
