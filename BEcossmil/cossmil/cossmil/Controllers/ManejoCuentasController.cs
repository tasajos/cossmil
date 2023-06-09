using cossmil.Migrations;
using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManejoCuentasController : ControllerBase
    {
        private readonly FarContext _context;


        public ManejoCuentasController(FarContext context)
        {


            _context = context;



        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listactivos = await _context.Activocuenta.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpGet("3ernivel")]
        public async Task<IActionResult> Get3ernivel()
        {
            try
            {
                var activocuentas = await _context.Activocuenta
                    .Where(ac => ac.activonivel.StartsWith("1"))
                    .Select(ac => new {
                        ac.id,
                        ac.nivel,
                        ac.nombrecuenta,
                        ac.cuentamayor,
                        ac.FechaCreacion,
                        ac.numero,
                        ac.totalnum,
                        ac.activonivel,
                        
                    })
                    .Take(1000)
                    .ToListAsync();

                return Ok(activocuentas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]

        public async Task<IActionResult> Post(activoclase Activocuenta)
        {
            try
            {
                Activocuenta.FechaCreacion = DateTime.Now;
                _context.Add(Activocuenta);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Activocuenta.id }, Activocuenta);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("activoclasen3")]
        public async Task<IActionResult> PostActivoclasen3(activoclasen3 Activocuenta3)
        {
            try
            {
                Activocuenta3.FechaCreacion = DateTime.Now;
                _context.Add(Activocuenta3);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getactivon3a", new { Id = Activocuenta3.id }, Activocuenta3);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("activon3a")]
        public async Task<IActionResult> Getactivon3a()
        {
            try
            {
                var listactivos = await _context.Activocuenta3.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }






        [HttpPost("registraactmayor")]
        public async Task<IActionResult> RegistraActMayor([FromBody] activoclase activocuenta)
        {
            try
            {
                // Realizar las operaciones necesarias para registrar los valores en actmayor
                activocuenta.nombrecuenta = $"{activocuenta.numero} - {activocuenta.numero} - {activocuenta.nombrecuenta}";

                activocuenta.FechaCreacion = DateTime.Now;
                _context.Add(activocuenta);
                await _context.SaveChangesAsync();

                return CreatedAtAction("Get", new { Id = activocuenta.id }, activocuenta);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpGet("activon3nivel")]
        public async Task<IActionResult> Getactivon3nivel()
        {
            try
            {
                var listactivos = await _context.Activocuenta3.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("activoclasen4")]
        public async Task<IActionResult> PostActivoclasen4(activoclasen4 Activocuenta4)
        {
            try
            {
                Activocuenta4.FechaCreacion = DateTime.Now;
                _context.Add(Activocuenta4);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getactivon4nivel", new { Id = Activocuenta4.id }, Activocuenta4);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("activon4nivel")]
        public async Task<IActionResult> Getactivon4nivel()
        {
            try
            {
                var listactivos = await _context.Activocuenta4.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }



        [HttpGet("activon5nivel")]
        public async Task<IActionResult> Getactivon5nivel()
        {
            try
            {
                var listactivos = await _context.Activocuenta5.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("activoclasen5")]
        public async Task<IActionResult> PostActivoclasen5(activoclasen5 Activocuenta5)
        {
            try
            {
                Activocuenta5.FechaCreacion = DateTime.Now;
                _context.Add(Activocuenta5);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getactivon5nivel", new { Id = Activocuenta5.id }, Activocuenta5);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
