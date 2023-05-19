using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AperturacajachicaController : ControllerBase
    {
        private readonly FarContext _context;

        public AperturacajachicaController(FarContext context)
        {

            //CajaChica
            _context = context;

        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listaperturacajachica = await _context.AperturaCajachica.ToListAsync();
                return Ok(listaperturacajachica);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost]

        public async Task<IActionResult> Post(aperturacajachica AperturaCajachica)
        {
            try
            {
                AperturaCajachica.FechaCreacion = DateTime.Now;
                _context.Add(AperturaCajachica);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = AperturaCajachica.id }, AperturaCajachica);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("fecha")]
        public async Task<IActionResult> GetFecha()
        {
            try
            {
                var today = DateTime.Today;
                var listaperturacajachica = await _context.AperturaCajachica
                    .Where(a => a.FechaCreacion.Date == today)
                    .OrderByDescending(a => a.FechaCreacion)
                    .ToListAsync();

                if (listaperturacajachica == null || listaperturacajachica.Count == 0)
                {
                    return NotFound(); // No se encontraron registros para la fecha de hoy
                }

                return Ok(listaperturacajachica);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }
}
