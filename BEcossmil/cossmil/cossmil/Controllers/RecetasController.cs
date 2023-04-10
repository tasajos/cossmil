using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecetasController : ControllerBase
    {

        private readonly FarContext _context;


        public RecetasController(FarContext context)
        {

            //Medicamento Esenciales
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listrecetas = await _context.Recetas.ToListAsync();
                return Ok(listrecetas);
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
                var listrecetaid = await _context.Recetas.FindAsync(Id);
                return Ok(listrecetaid);

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
                var delete = await _context.Recetas.FindAsync(Id);

                if (delete == null)
                {
                    return NotFound();
                }

                _context.Recetas.Remove(delete);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost]

        public async Task<IActionResult> Post(Precetas Recetas)
        {
            try
            {
                Recetas.FechaCreacion = DateTime.Now;
                _context.Add(Recetas);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Recetas.id }, Recetas);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Precetas Recetas)
        {
            try
            {


                if (id != Recetas.id)
                {
                    return BadRequest();
                }

                var pacienteItem = await _context.Recetas.FindAsync(id);

                if (pacienteItem == null)
                {
                    return NotFound();
                }
                pacienteItem.receta = Recetas.receta;
                pacienteItem.doctor = Recetas.doctor;
                pacienteItem.fechai = Recetas.fechai;
                pacienteItem.fechaf = Recetas.fechaf;
                pacienteItem.pieza = Recetas.pieza;
                pacienteItem.horai = Recetas.horai;
                pacienteItem.lapso = Recetas.lapso;
                pacienteItem.recordatorio = Recetas.recordatorio;

                await _context.SaveChangesAsync();

                return NoContent();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


      



    }


}
  


