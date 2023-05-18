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

    }
}
