using cossmil.Migrations;
using cossmil.Models;
using cossmil.Models.Pcuenta.Pasivo;
using cossmil.Models.Pcuenta.Patrimonio;
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


        [HttpPost("activoclasen6")]
        public async Task<IActionResult> PostActivoclasen6(activoclasen6 Activocuenta6)
        {
            try
            {
                Activocuenta6.FechaCreacion = DateTime.Now;
                _context.Add(Activocuenta6);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getactivon6nivel", new { Id = Activocuenta6.id }, Activocuenta6);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("activon6nivel")]
        public async Task<IActionResult> Getactivon6nivel()
        {
            try
            {
                var listactivos = await _context.Activocuenta6.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpGet("pasivon2nivel")]
        public async Task<IActionResult> Getpasivon2nivel()
        {
            try
            {
                var listactivos = await _context.Pasivocuentan2.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("pasivon2nivelp")]
        public async Task<IActionResult> Postpasivon2nivelp(pasivoclasen2 Pasivocuentan2)
        {
            try
            {
                Pasivocuentan2.FechaCreacion = DateTime.Now;
                _context.Add(Pasivocuentan2);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpasivon2nivel", new { Id = Pasivocuentan2.id }, Pasivocuentan2);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("pasivon3nivel")]
        public async Task<IActionResult> Getpasivon3nivel()
        {
            try
            {
                var listactivos = await _context.Pasivocuentan3.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("pasivon3nivelp")]
        public async Task<IActionResult> Postpasivon3nivelp(pasivoclasen3 Pasivocuentan3)
        {
            try
            {
                Pasivocuentan3.FechaCreacion = DateTime.Now;
                _context.Add(Pasivocuentan3);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpasivon3nivel", new { Id = Pasivocuentan3.id }, Pasivocuentan3);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("pasivon4nivel")]
        public async Task<IActionResult> Getpasivon4nivel()
        {
            try
            {
                var listactivos = await _context.Pasivocuentan4.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }



        [HttpPost("pasivon4nivelp")]
        public async Task<IActionResult> Postpasivon4nivelp(pasivoclasen4 Pasivocuentan4)
        {
            try
            {
                Pasivocuentan4.FechaCreacion = DateTime.Now;
                _context.Add(Pasivocuentan4);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpasivon4nivel", new { Id = Pasivocuentan4.id }, Pasivocuentan4);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





        [HttpGet("pasivon5nivel")]
        public async Task<IActionResult> Getpasivon5nivel()
        {
            try
            {
                var listactivos = await _context.Pasivocuentan5.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }



        [HttpPost("pasivon5nivelp")]
        public async Task<IActionResult> Postpasivon5nivelp(pasivoclasen5 Pasivocuentan5)
        {
            try
            {
                Pasivocuentan5.FechaCreacion = DateTime.Now;
                _context.Add(Pasivocuentan5);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpasivon4nivel", new { Id = Pasivocuentan5.id }, Pasivocuentan5);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("pasivon6nivel")]
        public async Task<IActionResult> Getpasivon6nivel()
        {
            try
            {
                var listactivos = await _context.Pasivocuentan6.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("pasivon6nivelp")]
        public async Task<IActionResult> Postpasivon6nivelp(pasivoclasen6 Pasivocuentan6)
        {
            try
            {
                Pasivocuentan6.FechaCreacion = DateTime.Now;
                _context.Add(Pasivocuentan6);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpasivon6nivel", new { Id = Pasivocuentan6.id }, Pasivocuentan6);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }







        [HttpGet("patrimonio2nivel")]
        public async Task<IActionResult> Getpatrimonio2nivel()
        {
            try
            {
                var listactivos = await _context.Patrimonion2.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("patrimonio2nivelp")]
        public async Task<IActionResult> Postpatrimonio2nivelp(patrimonioclasen2 Patrimonion2)
        {
            try
            {
                Patrimonion2.FechaCreacion = DateTime.Now;
                _context.Add(Patrimonion2);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpasivon2nivel", new { Id = Patrimonion2.id }, Patrimonion2);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





        [HttpGet("patrimonio3nivel")]
        public async Task<IActionResult> Getpatrimonio3nivel()
        {
            try
            {
                var listactivos = await _context.Patrimonion3.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("patrimonio3nivelp")]
        public async Task<IActionResult> Postpatrimonio3nivelp(patrimonioclasen3 Patrimonion3)
        {
            try
            {
                Patrimonion3.FechaCreacion = DateTime.Now;
                _context.Add(Patrimonion3);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpatrimonio3nivel", new { Id = Patrimonion3.id }, Patrimonion3);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





        [HttpGet("patrimonio4nivel")]
        public async Task<IActionResult> Getpatrimonio4nivel()
        {
            try
            {
                var listactivos = await _context.Patrimonion4.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("patrimonio4nivelp")]
        public async Task<IActionResult> Postpatrimonio4nivelp(patrimonioclasen4 Patrimonion4)
        {
            try
            {
                Patrimonion4.FechaCreacion = DateTime.Now;
                _context.Add(Patrimonion4);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpatrimonio4nivel", new { Id = Patrimonion4.id }, Patrimonion4);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }







    }
}
