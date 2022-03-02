using WebApp.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
      [Route("admin/")]
      [ApiController]
      public class AddonController : ControllerBase
      {
            private readonly AirnetContext _context;
            public AddonController(AirnetContext context)
            {
                  _context = context;
            }

            // GET: api/<PlanController>
            [HttpGet("getAddons")]
            public async Task<IEnumerable<Addon>> Get()
            {
                  return await _context.Addons.ToListAsync();
            }

            // GET api/<PlanController>/5
            [HttpGet("getAddon/{id}")]
            public async Task<IActionResult> GetPlan(int id)
            {
                  var plan = await _context.Addons.FindAsync(id);
                  if (plan != null)
                  {
                        return Ok(new { StatusCode = 200, Plans = plan });
                  }
                  return NotFound(new
                  {
                        StatusCode = 400,
                        Message = "Addon Not Found"
                  });
            }

            // POST api/<PlanController>
            //  [Route("addPlan")]
            [HttpPost("addAddon")]
            public async Task<IActionResult> Post([FromBody] Addon plan)
            {
                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        await _context.Addons.AddAsync(plan);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "Addon Added Successufully"
                        });
                  }
            }

            // PUT api/<PlanController>/5
            //  [Route("editPlan")]
            [HttpPut("editAddon/{id}")]
            public async Task<IActionResult> Put(int id, [FromBody] Addon plan)
            {
                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        var user = await _context.Addons.AsNoTracking().FirstOrDefaultAsync(e => e.AddonId == plan.AddonId);
                        if (user == null)
                        {
                              return NotFound(new
                              {
                                    StatusCode = 404,
                                    Message = "Addon not found",
                              });
                        }
                        else
                        {
                              _context.Entry(plan).State = EntityState.Modified;
                              _context.SaveChanges();
                              return Ok(new
                              {
                                    StatusCode = 200,
                                    Message = "Addon Updated Successfully"
                              });
                        }
                  }
            }

            // DELETE api/<PlanController>/5
            //  [Route("deletePlan")]
            [HttpDelete("deleteAddon/{id}")]
            public async Task<IActionResult> Delete(int id)
            {
                  var user = await _context.Addons.FindAsync(id);
                  if (user == null)
                  {
                        return NotFound(new
                        {
                              StatusCode = 404,
                              Message = "Addon Not Found",
                        });
                  }
                  else
                  {
                        _context.Addons.Remove(user);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "Addon Deleted"
                        });
                  }
            }
      }
}