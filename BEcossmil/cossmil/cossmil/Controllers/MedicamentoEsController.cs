using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicamentoEsController : ControllerBase

    {
        private readonly FarContext _context;


        public MedicamentoEsController(FarContext context)
        {

            //Medicamento Esenciales
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listmedicamento = await _context.Mesenciales.ToListAsync();
                return Ok(listmedicamento);
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
                var listmedicamentoid = await _context.Mesenciales.FindAsync(Id);
                return Ok(listmedicamentoid);

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
                var delete = await _context.Mesenciales.FindAsync(Id);

                if (delete == null)
                {
                    return NotFound();
                }

                _context.Mesenciales.Remove(delete);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost]

        public async Task<IActionResult> Post(Medicamentoesenciales Mesenciales)
        {
            try
            {
                Mesenciales.FechaCreacion = DateTime.Now;
                _context.Add(Mesenciales);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Mesenciales.id }, Mesenciales);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }


    }


}
  
