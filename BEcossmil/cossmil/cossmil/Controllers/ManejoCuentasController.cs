using cossmil.Migrations;
using cossmil.Models;
using cossmil.Models.Pcuenta.Costos_Operacion;
using cossmil.Models.Pcuenta.Cuenta_Distribucion;
using cossmil.Models.Pcuenta.Cuenta_Productos;
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




        [HttpGet("patrimonio5nivel")]
        public async Task<IActionResult> Getpatrimonio5nivel()
        {
            try
            {
                var listactivos = await _context.Patrimonion5.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("patrimonio5nivelp")]
        public async Task<IActionResult> Postpatrimonio5nivelp(patrimonioclasen5 Patrimonion5)
        {
            try
            {
                Patrimonion5.FechaCreacion = DateTime.Now;
                _context.Add(Patrimonion5);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpatrimonio5nivel", new { Id = Patrimonion5.id }, Patrimonion5);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("patrimonio6nivel")]
        public async Task<IActionResult> Getpatrimonio6nivel()
        {
            try
            {
                var listactivos = await _context.Patrimonion6.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("patrimonio6nivelp")]
        public async Task<IActionResult> Postpatrimonio6nivelp(patrimonioclasen6 Patrimonion6)
        {
            try
            {
                Patrimonion6.FechaCreacion = DateTime.Now;
                _context.Add(Patrimonion6);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getpatrimonio6nivel", new { Id = Patrimonion6.id }, Patrimonion6);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //////////////////////////////////////
        ////  CUENTA DE DISTRIBUCION    /////
        ////////////////////////////////////




        [HttpGet("cuentad2nivel")]
        public async Task<IActionResult> Getcuentad2nivel()
        {
            try
            {
                var listactivos = await _context.CuentaDistribucion2.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentad2nivelp")]
        public async Task<IActionResult> Postcuentad2nivelp(cuentadist2 CuentaDistribucion2)
        {
            try
            {
                CuentaDistribucion2.FechaCreacion = DateTime.Now;
                _context.Add(CuentaDistribucion2);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentad2nivel", new { Id = CuentaDistribucion2.id }, CuentaDistribucion2);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("cuentad3nivel")]
        public async Task<IActionResult> Getcuentad3nivel()
        {
            try
            {
                var listactivos = await _context.CuentaDistribucion3.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentad3nivelp")]
        public async Task<IActionResult> Postcuentad3nivelp(cuentadist3 CuentaDistribucion3)
        {
            try
            {
                CuentaDistribucion3.FechaCreacion = DateTime.Now;
                _context.Add(CuentaDistribucion3);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentad3nivel", new { Id = CuentaDistribucion3.id }, CuentaDistribucion3);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("cuentad4nivel")]
        public async Task<IActionResult> Getcuentad4nivel()
        {
            try
            {
                var listactivos = await _context.CuentaDistribucion4.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentad4nivelp")]
        public async Task<IActionResult> Postcuentad4nivelp(cuentadist4 CuentaDistribucion4)
        {
            try
            {
                CuentaDistribucion4.FechaCreacion = DateTime.Now;
                _context.Add(CuentaDistribucion4);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentad4nivel", new { Id = CuentaDistribucion4.id }, CuentaDistribucion4);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("cuentad5nivel")]
        public async Task<IActionResult> Getcuentad5nivel()
        {
            try
            {
                var listactivos = await _context.CuentaDistribucion5.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentad5nivelp")]
        public async Task<IActionResult> Postcuentad5nivelp(cuentadist5 CuentaDistribucion5)
        {
            try
            {
                CuentaDistribucion5.FechaCreacion = DateTime.Now;
                _context.Add(CuentaDistribucion5);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentad5nivel", new { Id = CuentaDistribucion5.id }, CuentaDistribucion5);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("cuentad6nivel")]
        public async Task<IActionResult> Getcuentad6nivel()
        {
            try
            {
                var listactivos = await _context.CuentaDistribucion6.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentad6nivelp")]
        public async Task<IActionResult> Postcuentad6nivelp(cuentadist6 CuentaDistribucion6)
        {
            try
            {
                CuentaDistribucion6.FechaCreacion = DateTime.Now;
                _context.Add(CuentaDistribucion6);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentad6nivel", new { Id = CuentaDistribucion6.id }, CuentaDistribucion6);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //////////////////////////////////////
        ////  CUENTA DE PRODUCTOS       /////
        ////////////////////////////////////



        [HttpGet("cuentap2nivel")]
        public async Task<IActionResult> Getcuentap2nivel()
        {
            try
            {
                var listactivos = await _context.CuentaProducto2.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentap2nivelp")]
        public async Task<IActionResult> Postcuentap2nivelp(cuentaproducto2 CuentaProducto2)
        {
            try
            {
                CuentaProducto2.FechaCreacion = DateTime.Now;
                _context.Add(CuentaProducto2);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentap2nivel", new { Id = CuentaProducto2.id }, CuentaProducto2);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("cuentap3nivel")]
        public async Task<IActionResult> Getcuentap3nivel()
        {
            try
            {
                var listactivos = await _context.CuentaProducto3.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentap3nivelp")]
        public async Task<IActionResult> Postcuentap3nivelp(cuentaproducto3 CuentaProducto3)
        {
            try
            {
                CuentaProducto3.FechaCreacion = DateTime.Now;
                _context.Add(CuentaProducto3);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentap3nivel", new { Id = CuentaProducto3.id }, CuentaProducto3);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("cuentap4nivel")]
        public async Task<IActionResult> Getcuentap4nivel()
        {
            try
            {
                var listactivos = await _context.CuentaProducto4.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentap4nivelp")]
        public async Task<IActionResult> Postcuentap4nivelp(cuentaproducto4 CuentaProducto4)
        {
            try
            {
                CuentaProducto4.FechaCreacion = DateTime.Now;
                _context.Add(CuentaProducto4);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentap4nivel", new { Id = CuentaProducto4.id }, CuentaProducto4);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("cuentap5nivel")]
        public async Task<IActionResult> Getcuentap5nivel()
        {
            try
            {
                var listactivos = await _context.CuentaProducto5.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentap5nivelp")]
        public async Task<IActionResult> Postcuentap5nivelp(cuentaproducto5 CuentaProducto5)
        {
            try
            {
                CuentaProducto5.FechaCreacion = DateTime.Now;
                _context.Add(CuentaProducto5);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentap5nivel", new { Id = CuentaProducto5.id }, CuentaProducto5);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("cuentap6nivel")]
        public async Task<IActionResult> Getcuentap6nivel()
        {
            try
            {
                var listactivos = await _context.CuentaProducto6.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentap6nivelp")]
        public async Task<IActionResult> Postcuentap6nivelp(cuentaproducto6 CuentaProducto6)
        {
            try
            {
                CuentaProducto6.FechaCreacion = DateTime.Now;
                _context.Add(CuentaProducto6);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentap6nivel", new { Id = CuentaProducto6.id }, CuentaProducto6);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





        //////////////////////////////////////
        ////  COSTOS DE OPERACION       /////
        ////////////////////////////////////



        [HttpGet("cuentao2nivel")]
        public async Task<IActionResult> Getcuentao2nivel()
        {
            try
            {
                var listactivos = await _context.CostoOperacion2.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentao2nivelp")]
        public async Task<IActionResult> Postcuentao2nivelp(coperacion2 CostoOperacion2)
        {
            try
            {
                CostoOperacion2.FechaCreacion = DateTime.Now;
                _context.Add(CostoOperacion2);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentao2nivel", new { Id = CostoOperacion2.id }, CostoOperacion2);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpGet("cuentao3nivel")]
        public async Task<IActionResult> Getcuentao3nivel()
        {
            try
            {
                var listactivos = await _context.CostoOperacion3.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentao3nivelp")]
        public async Task<IActionResult> Postcuentao3nivelp(coperacion3 CostoOperacion3)
        {
            try
            {
                CostoOperacion3.FechaCreacion = DateTime.Now;
                _context.Add(CostoOperacion3);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentao3nivel", new { Id = CostoOperacion3.id }, CostoOperacion3);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpGet("cuentao4nivel")]
        public async Task<IActionResult> Getcuentao4nivel()
        {
            try
            {
                var listactivos = await _context.CostoOperacion4.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentao4nivelp")]
        public async Task<IActionResult> Postcuentao4nivelp(coperacion4 CostoOperacion4)
        {
            try
            {
                CostoOperacion4.FechaCreacion = DateTime.Now;
                _context.Add(CostoOperacion4);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentao4nivel", new { Id = CostoOperacion4.id }, CostoOperacion4);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





        [HttpGet("cuentao5nivel")]
        public async Task<IActionResult> Getcuentao5nivel()
        {
            try
            {
                var listactivos = await _context.CostoOperacion5.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentao5nivelp")]
        public async Task<IActionResult> Postcuentao5nivelp(coperacion5 CostoOperacion5)
        {
            try
            {
                CostoOperacion5.FechaCreacion = DateTime.Now;
                _context.Add(CostoOperacion5);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentao5nivel", new { Id = CostoOperacion5.id }, CostoOperacion5);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpGet("cuentao6nivel")]
        public async Task<IActionResult> Getcuentao6nivel()
        {
            try
            {
                var listactivos = await _context.CostoOperacion6.ToListAsync();
                return Ok(listactivos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }


        [HttpPost("cuentao6nivelp")]
        public async Task<IActionResult> Postcuentao6nivelp(coperacion6 CostoOperacion6)
        {
            try
            {
                CostoOperacion6.FechaCreacion = DateTime.Now;
                _context.Add(CostoOperacion6);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Getcuentao6nivel", new { Id = CostoOperacion6.id }, CostoOperacion6);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }






    }
}
