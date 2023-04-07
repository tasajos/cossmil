using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class cirugiaController : ControllerBase
    {

        private readonly FarContext _context;


        public cirugiaController(FarContext context)
        {

           //ProgracionCirugia
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listcirugia = await _context.ProgracionCirugia.ToListAsync();
                return Ok(listcirugia);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }
        [HttpGet("{id}")]

        public async Task<IActionResult> Get(int Id)
        {
            try
            {
                var listcirugiaid = await _context.ProgracionCirugia.FindAsync(Id);
                return Ok(listcirugiaid);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            try
            {
                var delete = await _context.ProgracionCirugia.FindAsync(Id);

                if (delete == null)
                {
                    return NotFound();
                }

                _context.ProgracionCirugia.Remove(delete);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost]

        public async Task<IActionResult> Post(Pcirugia ProgracionCirugia)
        {
            try
            {
                ProgracionCirugia.FechaCreacion = DateTime.Now;
                _context.Add(ProgracionCirugia);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = ProgracionCirugia.id }, ProgracionCirugia);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }


    }


}
   