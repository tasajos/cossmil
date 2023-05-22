using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;


namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CierrreCajaController : ControllerBase
    {

        private readonly FarContext _context;

        public CierrreCajaController(FarContext context)
        {

            //CajaChica
            _context = context;

        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var cierre = await _context.CierreCChica.ToListAsync();
                return Ok(cierre);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost]

        public async Task<IActionResult> Post(CierreCajaChica CierreCChica)
        {
            try
            {
                CierreCChica.FechaCreacion = DateTime.Now;
                _context.Add(CierreCChica);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = CierreCChica.id }, CierreCChica);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }


    }
}
