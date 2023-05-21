using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;


namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NroReciboController : ControllerBase
    {

        private readonly FarContext _context;

        public NroReciboController(FarContext context)
        {

            //CajaChica
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var ultimoNroRecibo = await _context.Recibosdb.OrderByDescending(recibo => recibo.nrorecibo).Select(recibo => recibo.nrorecibo).FirstOrDefaultAsync();
                return Ok(ultimoNroRecibo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost]

        public async Task<IActionResult> Post(Recibos Recibosdb)
        {
            try
            {
                Recibosdb.FechaCreacion = DateTime.Now;
                _context.Add(Recibosdb);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Recibosdb.id }, Recibosdb);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }



    }
}
