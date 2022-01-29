using Airnet_Backend.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Airnet_Backend.Controllers
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
            public IEnumerable<Addon> Get()
            {
                  return _context.Addons.ToList();
            }

            // GET api/<PlanController>/5
            [HttpGet("getAddon/{id}")]
            public IActionResult GetPlan(int id)
            {
                  var plan = _context.Addons.Find(id);
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
            public IActionResult Post([FromBody] Addon plan)
            {
                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        _context.Addons.Add(plan);
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
            public IActionResult Put(int id, [FromBody] Addon plan)
            {
                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        var user = _context.Addons.AsNoTracking().FirstOrDefault(e => e.AddonId == plan.AddonId);
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
            public IActionResult Delete(int id)
            {
                  var user = _context.Addons.Find(id);
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