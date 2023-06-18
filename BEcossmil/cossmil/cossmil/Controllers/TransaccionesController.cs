using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using cossmil.Models;

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

        [HttpGet]
        public async Task<IActionResult> Get()
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


    }
}
