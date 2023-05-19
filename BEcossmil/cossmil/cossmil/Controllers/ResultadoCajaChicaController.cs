using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;
namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultadoCajaChicaController : ControllerBase
    {
        private readonly FarContext _context;

        public ResultadoCajaChicaController(FarContext context)
        {

            //CajaChica
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var resultadocajachica = await _context.ResTCChica.ToListAsync();
                return Ok(resultadocajachica);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }
    }
}
