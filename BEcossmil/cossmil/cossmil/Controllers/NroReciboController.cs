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
                var nroRecibos = await _context.Recibosdb.Select(recibo => recibo.nrorecibo).ToListAsync();
                return Ok(nroRecibos);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
