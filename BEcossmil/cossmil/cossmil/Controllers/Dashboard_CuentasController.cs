using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Dashboard_CuentasController : ControllerBase
    {
        private readonly FarContext _context;

        public Dashboard_CuentasController(FarContext context)
        {
            _context = context;
        }

        [HttpGet("dashboardactivo")]
        public async Task<IActionResult> GetDashboardActivo()
        {
            try
            {
                var activocuentas = await _context.Activocuenta
                    .Where(ac => ac.activonivel.StartsWith("1"))
                    .Select(ac => new
                    {
                        ac.activonivel,
                        ac.nombrecuenta
                    })
                    .Union(_context.Activocuenta3.Select(ac3 => new
                    {
                        activonivel = ac3.totalnivel,
                        ac3.nombrecuenta
                    }))
                    .Union(_context.Activocuenta4.Select(ac4 => new
                    {
                        activonivel = ac4.totalnivel,
                        ac4.nombrecuenta
                    }))
                    .Union(_context.Activocuenta5.Select(ac5 => new
                    {
                        activonivel = ac5.totalnivel,
                        ac5.nombrecuenta
                    }))
                    .Union(_context.Activocuenta6.Select(ac6 => new
                    {
                        activonivel = ac6.totalnivel,
                        ac6.nombrecuenta
                    }))
                    .OrderBy(ac => ac.activonivel)
                    .Take(1000)
                    .ToListAsync();

                return Ok(activocuentas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("totalregistrosDB")]
        public async Task<IActionResult> GetTotalRegistrosdb()
        {
            try
            {
                var totalRegistros = await _context.Activocuenta
                    .Where(ac => ac.activonivel.StartsWith("1"))
                    .Select(ac => ac.id)
                    .Cast<int>()
                    .Concat(_context.Activocuenta3.Select(ac3 => ac3.id).Cast<int>())
                    .Concat(_context.Activocuenta4.Select(ac4 => ac4.id).Cast<int>())
                    .Concat(_context.Activocuenta5.Select(ac5 => ac5.id).Cast<int>())
                    .Concat(_context.Activocuenta6.Select(ac6 => ac6.id).Cast<int>())
                    .CountAsync();

                return Ok(totalRegistros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("dashboardpasivo")]
        public async Task<IActionResult> GetDashboardPasivo()
        {
            try
            {
                var pasivocuentas = await _context.Pasivocuentan2
                    .Select(ac => new
                    {
                        ac.activonivel,
                        ac.nombrecuenta
                    })
                    .Union(_context.Pasivocuentan3.Select(ac3 => new
                    {
                        activonivel = ac3.totalnivel,
                        ac3.nombrecuenta
                    }))
                    .Union(_context.Pasivocuentan4.Select(ac4 => new
                    {
                        activonivel = ac4.totalnivel,
                        ac4.nombrecuenta
                    }))
                    .Union(_context.Pasivocuentan5.Select(ac5 => new
                    {
                        activonivel = ac5.totalnivel,
                        ac5.nombrecuenta
                    }))
                    .Union(_context.Pasivocuentan6.Select(ac6 => new
                    {
                        activonivel = ac6.totalnivel,
                        ac6.nombrecuenta
                    }))
                    .OrderBy(ac => ac.activonivel)
                    .ToListAsync();

                return Ok(pasivocuentas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("totalregistrosDBPasivo")]
        public async Task<IActionResult> GetTotalRegistrosdbpasivo()
        {
            try
            {
                var totalRegistros = await _context.Pasivocuentan2
                    .Where(ac => ac.activonivel.StartsWith("2"))
                    .Select(ac => ac.id)
                    .Cast<int>()
                    .Concat(_context.Pasivocuentan3.Select(ac3 => ac3.id).Cast<int>())
                    .Concat(_context.Pasivocuentan4.Select(ac4 => ac4.id).Cast<int>())
                    .Concat(_context.Pasivocuentan5.Select(ac5 => ac5.id).Cast<int>())
                    .Concat(_context.Pasivocuentan6.Select(ac6 => ac6.id).Cast<int>())
                    .CountAsync();

                return Ok(totalRegistros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("totalregistrosDBPatrimonio")]
        public async Task<IActionResult> GetTotalRegistrosdbpatrimonio()
        {
            try
            {
                var totalRegistros = await _context.Patrimonion2
                    .Where(ac => ac.activonivel.StartsWith("3"))
                    .Select(ac => ac.id)
                    .Cast<int>()
                    .Concat(_context.Patrimonion3.Select(ac3 => ac3.id).Cast<int>())
                    .Concat(_context.Patrimonion4.Select(ac4 => ac4.id).Cast<int>())
                    .Concat(_context.Patrimonion5.Select(ac5 => ac5.id).Cast<int>())
                    .Concat(_context.Patrimonion6.Select(ac6 => ac6.id).Cast<int>())
                    .CountAsync();

                return Ok(totalRegistros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("totalregistrosDBcdistribucion")]
        public async Task<IActionResult> GetTotalRegistrosdbcdistribucion()
        {
            try
            {
                var totalRegistros = await _context.CuentaDistribucion2
                    .Where(ac => ac.activonivel.StartsWith("4"))
                    .Select(ac => ac.id)
                    .Cast<int>()
                    .Concat(_context.CuentaDistribucion3.Select(ac3 => ac3.id).Cast<int>())
                    .Concat(_context.CuentaDistribucion4.Select(ac4 => ac4.id).Cast<int>())
                    .Concat(_context.CuentaDistribucion5.Select(ac5 => ac5.id).Cast<int>())
                    .Concat(_context.CuentaDistribucion6.Select(ac6 => ac6.id).Cast<int>())
                    .CountAsync();

                return Ok(totalRegistros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("totalregistrosDBcproducto")]
        public async Task<IActionResult> GetTotalRegistrosdbcproducto()
        {
            try
            {
                var totalRegistros = await _context.CuentaProducto2
                    .Where(ac => ac.activonivel.StartsWith("5"))
                    .Select(ac => ac.id)
                    .Cast<int>()
                    .Concat(_context.CuentaProducto3.Select(ac3 => ac3.id).Cast<int>())
                    .Concat(_context.CuentaProducto4.Select(ac4 => ac4.id).Cast<int>())
                    .Concat(_context.CuentaProducto5.Select(ac5 => ac5.id).Cast<int>())
                    .Concat(_context.CuentaProducto6.Select(ac6 => ac6.id).Cast<int>())
                    .CountAsync();

                return Ok(totalRegistros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("totalregistrosDBcoperacion")]
        public async Task<IActionResult> GetTotalRegistrosdbcoperacion()
        {
            try
            {
                var totalRegistros = await _context.CostoOperacion2
                    .Where(ac => ac.activonivel.StartsWith("6"))
                    .Select(ac => ac.id)
                    .Cast<int>()
                    .Concat(_context.CostoOperacion3.Select(ac3 => ac3.id).Cast<int>())
                    .Concat(_context.CostoOperacion4.Select(ac4 => ac4.id).Cast<int>())
                    .Concat(_context.CostoOperacion5.Select(ac5 => ac5.id).Cast<int>())
                    .Concat(_context.CostoOperacion6.Select(ac6 => ac6.id).Cast<int>())
                    .CountAsync();

                return Ok(totalRegistros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
