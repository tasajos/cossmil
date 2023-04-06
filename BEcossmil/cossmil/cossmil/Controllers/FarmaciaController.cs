using cossmil.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace cossmil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FarmaciaController : ControllerBase
    {
        private readonly FarContext _context;
        private object jsonObject;

        public FarmaciaController(FarContext context)
        {


            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listpersonal = await _context.FarmaciaTab.ToListAsync();
                return Ok(listpersonal);
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
                var personalss = await _context.FarmaciaTab.FindAsync(Id);
                return Ok(personalss);

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

        public async Task<IActionResult> Post(FarmT personal)
        {

            try
            {
                string json = JsonConvert.SerializeObject(personal);

                // Deserialize the JSON to a Personal object
                FarmT deserializedPersonal = JsonConvert.DeserializeObject<FarmT>(json);

                // Set the FechaCreacion property and save to the database
                deserializedPersonal.FechaCreacion = DateTime.Now;
                _context.Add(deserializedPersonal);
                await _context.SaveChangesAsync();



                //personal.FechaCreacion = DateTime.Now;
                //_context.Add(personal);
                //await _context.SaveChangesAsync();
                //return CreatedAtAction("Get", new { Id = personal.id }, personal);

                return CreatedAtAction("Get", new { Id = personal.id }, personal);
            }
            catch (System.Text.Json.JsonException ex)
            {
                // Handle JSON serialization or deserialization errors
                return BadRequest("Invalid JSON data: " + ex.Message);
            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }
        // catch (Exception ex)
        //{
        //  return BadRequest(ex.Message);
        //}


        // }




    }


}