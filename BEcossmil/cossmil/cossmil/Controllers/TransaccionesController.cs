using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;
using cossmil.Models.Transacciones;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransaccionesController : ControllerBase
    {
        private readonly FarContext _context;

        public TransaccionesController(FarContext context)
        {

            //Transacciones
            _context = context;

        }

        [HttpGet("ingresosT")]
        public async Task<IActionResult> GetingresoT()
        {
            try
            {
                var transaccionesingreso = await _context.IngresosTransacciones.ToListAsync();
                return Ok(transaccionesingreso);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("ingresospT")]
        public async Task<IActionResult> Postingresospt(ingresot IngresosTransacciones)
        {
            try
            {
                IngresosTransacciones.FechaCreacion = DateTime.Now;
                _context.Add(IngresosTransacciones);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetingresoT", new { Id = IngresosTransacciones.id }, IngresosTransacciones);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("ingresospTT")]
        public async Task<IActionResult> Postingresosptt(opcionesT OpcionesTransacciones)
        {
            try
            {
                OpcionesTransacciones.FechaCreacion = DateTime.Now;

                // Obtener el último número actualizado
                var ultimoNumero = await _context.IngresosTransacciones.MaxAsync(x => x.numero);
                OpcionesTransacciones.numero = ultimoNumero + 1;

                _context.Add(OpcionesTransacciones);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetopcionesT", new { Id = OpcionesTransacciones.id }, OpcionesTransacciones);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }







        [HttpGet("ultimoNumero")]
        public async Task<IActionResult> GetUltimoNumero()
        {
            try
            {
                var ultimoIngreso = await _context.IngresosTransacciones
                    .OrderByDescending(i => i.id)
                    .FirstOrDefaultAsync();

                if (ultimoIngreso != null)
                {
                    var ultimoNumero = ultimoIngreso.numero;
                    return Ok(ultimoNumero);
                }
                else
                {
                    // No se encontraron registros, se puede considerar un número inicial como 1 o cualquier otro valor predeterminado
                    var numeroInicial = 1;
                    return Ok(numeroInicial);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("opcionesT")]
        public async Task<IActionResult> GetopcionesT()
        {
            try
            {
                var transacciones = await _context.OpcionesTransacciones.ToListAsync();
                return Ok(transacciones);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }



        [HttpPost("opcionespT")]
        public async Task<IActionResult> Postopcionespt(opcionesT OpcionesTransacciones)
        {
            try
            {
                OpcionesTransacciones.FechaCreacion = DateTime.Now;
                _context.Add(OpcionesTransacciones);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetopcionesT", new { Id = OpcionesTransacciones.id }, OpcionesTransacciones);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
