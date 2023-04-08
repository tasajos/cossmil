using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FarmaciaController : ControllerBase
    {
        private readonly FarContext _context;
      

        public FarmaciaController(FarContext context)
        {


            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listmedicamentos = await _context.FarmaciaTab.ToListAsync();
                return Ok(listmedicamentos);
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
                var listmedicamentosid = await _context.FarmaciaTab.FindAsync(Id);
                return Ok(listmedicamentosid);

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
                var delete = await _context.FarmaciaTab.FindAsync(Id);

                if (delete == null)
                {
                    return NotFound();
                }

                _context.FarmaciaTab.Remove(delete);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost]

        public async Task<IActionResult> Post(FarmT FarmaciaTab)
        {
            try
            {
                FarmaciaTab.FechaCreacion = DateTime.Now;
                _context.Add(FarmaciaTab);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = FarmaciaTab.id }, FarmaciaTab);
               
            }    
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }


        [HttpGet("sum-cantidad-pedida/{codigovademecum}")]
        public async Task<IActionResult> GetSumCantidadPedida(string codigovademecum)
        {
            try
            {
                var sum = await _context.FarmaciaTab
                    .Where(m => m.codigovademecum == codigovademecum)
                    .SumAsync(m => m.cantidadpedida);
                return Ok(new { codigovademecum = codigovademecum, cantidadpedida = sum });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("sum-medicamento-pedida")]
        public async Task<IActionResult> GetSumCantidadPedida()
        {
            try
            {
                var result = await _context.FarmaciaTab
                    .GroupBy(m => m.codigovademecum)
                    .Select(g => new { codigovademecum = g.Key, cantidadpedida = g.Sum(m => m.cantidadpedida) })
                    .ToListAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }


}