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





    }
}
