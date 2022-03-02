using WebApp.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
    [Route("{user}/")]
    [ApiController]
    public class RechargeController : ControllerBase
    {
        private readonly AirnetContext _context;

            public RechargeController(AirnetContext context)
            {
                  _context = context;

            }

            // GET: api/<PlanController>
            [HttpGet("getRecharge")]
            public async Task<IEnumerable<Recharge>> Get()
            {
                  string user = (string)RouteData.Values["user"];
                  return (IEnumerable<Recharge>)await _context.Recharges.Where(b => b.UserName == user).ToListAsync();
            }

            // GET api/<PlanController>/5
            //[FromRoute]
            //string user,

            /* **********Async Not Done************ */
            /* **********Async Not Done************ */
            /* **********Async Not Done************ */
            [HttpGet("getRecharge/{id}")]
            public IActionResult GetId([FromRoute] int id)
            {
                  var plan = _context.Recharges.Where(b => b.RechargeId == id);
                  if (plan != null)
                  {
                        return Ok(new { StatusCode = 200, Plans = plan });
                  }
                  return NotFound(new
                  {
                        StatusCode = 400,
                        Message = "No Recharges Found"
                  });
            }

            // POST api/<PlanController>

            [HttpPost("addRecharge")]
            public async Task<IActionResult> Post([FromBody] Recharge plan)
            {
                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        await _context.Recharges.AddAsync(plan);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "Plan Added Successufully"
                        });
                  }
            }

            // PUT api/<PlanController>/5

            [HttpPut("editRecharge/{id}")]
            public async Task<IActionResult> Put(int id, [FromBody] Recharge plan)
            {

                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        var user = await _context.Recharges.AsNoTracking().FirstOrDefaultAsync(e => e.RechargeId == plan.RechargeId);
                        if (user == null)
                        {
                              return NotFound(new
                              {
                                    StatusCode = 404,
                                    Message = "Recharge not found",
                              });
                        }
                        else
                        {
                              _context.Entry(plan).State = EntityState.Modified;
                              _context.SaveChanges();
                              return Ok(new
                              {
                                    StatusCode = 200,
                                    Message = "Recharge Updated Successfully"
                              });
                        }
                  }
            }

            // DELETE api/<PlanController>/5
            //  [Route("deletePlan")]
            [HttpDelete("deleteRecharge/{id}")]
            public async Task<IActionResult> Delete(int id)
            {
                  var user = await _context.Recharges.FindAsync(id);
                  if (user == null)
                  {
                        return NotFound(new
                        {
                              StatusCode = 404,
                              Message = "Recharge not found",
                        });
                  }
                  else
                  {
                        _context.Recharges.Remove(user);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "Recharge Deleted"
                        });
                  }
            }
    }
}