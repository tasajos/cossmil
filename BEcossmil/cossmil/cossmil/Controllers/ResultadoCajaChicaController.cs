using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;
using Microsoft.Data.SqlClient;
using System.Data;

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

        [HttpPost("cp_cajachica")]
        public async Task<IActionResult> EjecutarQuery()
        {
            try
            {
                // Ejecutar el query y obtener el resultado
                string query = "INSERT INTO ResTCChica (montotr, FechaCreacion) " +
                               "SELECT TOP 1 montoinicial, GETDATE() " +
                               "FROM AperturaCajachica " +
                               "ORDER BY FechaCreacion DESC";

                await _context.Database.ExecuteSqlRawAsync(query);

                // Obtener los resultados actualizados
                var resultadocajachica = await _context.ResTCChica.ToListAsync();

                return Ok(resultadocajachica);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("ultimomontotr")]
        public async Task<IActionResult> GetUltimoMontotr()
        {
            try
            {
                var ultimoMontotr = await _context.ResTCChica
                    .OrderByDescending(r => r.FechaCreacion)
                    .Select(r => r.montotr)
                    .FirstOrDefaultAsync();

                return Ok(ultimoMontotr);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("actualizarmontotr")]
        public async Task<IActionResult> ActualizarMontotr()
        {
            try
            {
                // Obtener el último monto de RegCajachica
                var ultimoMonto = await _context.RegCajachica
                    .OrderByDescending(r => r.FechaCreacion)
                    .Select(r => r.monto)
                    .FirstOrDefaultAsync();

                // Actualizar el montotr en ResTCChica
                string query = "UPDATE ResTCChica " +
                               "SET montotr = CAST(montotr AS FLOAT) - @monto " +
                               "WHERE id = (SELECT MAX(id) FROM ResTCChica)";

                var parametros = new SqlParameter("@monto", SqlDbType.Float);
                parametros.Value = ultimoMonto;

                await _context.Database.ExecuteSqlRawAsync(query, parametros);

                // Obtener los resultados actualizados
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
