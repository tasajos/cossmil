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
                var activoN2 = await _context.Activocuenta
                    .Select(ac => new { activonivel = ac.activonivel ?? "", Activo_N2 = ac.nombrecuenta })
                    .ToListAsync();

                var activoN3 = await _context.Activocuenta3
                    .Select(ac => new { totalnivel = ac.totalnum + "." + ac.numero, Activo_N3 = ac.nombrecuenta })
                    .ToListAsync();

                var activoN4 = await _context.Activocuenta4
                    .Select(ac => new { totalnivel = ac.totalnum + "." + ac.numero, Activo_N4 = ac.nombrecuenta })
                    .ToListAsync();

                var activoN5 = await _context.Activocuenta5
                    .Select(ac => new { totalnivel = ac.totalnum + "." + ac.numero, Activo_N5 = ac.nombrecuenta })
                    .ToListAsync();

                var activoN6 = await _context.Activocuenta6
                    .Select(ac => new { totalnivel = ac.totalnum + "." + ac.numero, Activo_N6 = ac.nombrecuenta })
                    .ToListAsync();

                var dashboardActivo = activoN2
                    .Concat(activoN3.Cast<object>())
                    .Concat(activoN4.Cast<object>())
                    .Concat(activoN5.Cast<object>())
                    .Concat(activoN6.Cast<object>())
                    .OrderBy(ac => ac?.GetType().GetProperty("activonivel")?.GetValue(ac))
                    .ToList();

                return Ok(dashboardActivo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}