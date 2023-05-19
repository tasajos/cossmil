using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegGcajachicaController : ControllerBase
    {

      
            private readonly FarContext _context;

            public RegGcajachicaController(FarContext context)
            {

                //CajaChica
                _context = context;

            }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var registrogastosperturacajachica = await _context.RegCajachica.ToListAsync();
                return Ok(registrogastosperturacajachica);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }

        [HttpPost]

        public async Task<IActionResult> Post(registrocajachica RegCajaChica)
        {
            try
            {
                RegCajaChica.FechaCreacion = DateTime.Now;
                _context.Add(RegCajaChica);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = RegCajaChica.id }, RegCajaChica);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }



    }
    }




