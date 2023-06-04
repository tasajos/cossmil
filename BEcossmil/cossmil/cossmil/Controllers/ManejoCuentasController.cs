using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManejoCuentasController : ControllerBase
    {
        private readonly FarContext _context;


        public ManejoCuentasController(FarContext context)
        {


            _context = context;



        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listactivos = await _context.Activocuenta.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost]

        public async Task<IActionResult> Post(activoclase Activocuenta)
        {
            try
            {
                Activocuenta.FechaCreacion = DateTime.Now;
                _context.Add(Activocuenta);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Activocuenta.id }, Activocuenta);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }




    }
}
