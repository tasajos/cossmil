using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResumeCchicaController : ControllerBase
    {
        private readonly FarContext _context;

        public ResumeCchicaController(FarContext context)
        {

            //CajaChica
            _context = context;

        }




        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var resumegastosacajachica = await _context.ResumeCChica.ToListAsync();
                return Ok(resumegastosacajachica);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }
    }
}
