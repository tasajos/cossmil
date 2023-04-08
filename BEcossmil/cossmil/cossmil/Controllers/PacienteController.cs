using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private readonly FarContext _context;


        public PacienteController(FarContext context)
        {

            //Medicamento Esenciales
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listpaciente = await _context.Pacientes.ToListAsync();
                return Ok(listpaciente);
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
                var listmedicamentoid = await _context.Pacientes.FindAsync(Id);
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
                var delete = await _context.Pacientes.FindAsync(Id);

                if (delete == null)
                {
                    return NotFound();
                }

                _context.Pacientes.Remove(delete);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost]

        public async Task<IActionResult> Post(PPacientesT Pacientes)
        {
            try
            {
                Pacientes.FechaCreacion = DateTime.Now;
                _context.Add(Pacientes);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Pacientes.id }, Pacientes);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }


    }


}
  

