using Microsoft.AspNetCore.Mvc;
using WebApp.Model;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
   [Route("admin/")]
   [ApiController]
   public class PlanController : ControllerBase
   {
      private readonly AirnetContext _context;
      public PlanController(AirnetContext context)
      {
            _context = context;
      }

      // GET: api/<PlanController>
       [HttpGet("getPlans")]
       public async Task<IEnumerable<Plan>> Get()
       {
            return await _context.Plans.ToListAsync();
       }

       // GET api/<PlanController>/5
       [HttpGet("getPlan/{id}")]
       public async Task<IActionResult> GetPlan(int id)
       {
            var plan = await _context.Plans.FindAsync(id);
            if(plan != null){
                  return Ok(new {StatusCode=200 , Plans = plan});
            }
            return NotFound(new{
                  StatusCode=404,
                  Message = "Plan Not Found"
            });
       }

       // POST api/<PlanController>
      //  [Route("addPlan")]
       [HttpPost("addPlan")]
       public async Task<IActionResult> Post([FromBody] Plan plan)
       {
             if(plan == null){
                   return BadRequest();
             }
             else{
                   await _context.Plans.AddAsync(plan);
                   _context.SaveChanges();
                   return Ok(new{
                         StatusCode = 200,
                         Message = "Plan Added Successufully"
                   });
             }
       }

       // PUT api/<PlanController>/5
      //  [Route("editPlan")]
       [HttpPut("editPlan/{id}")]
       public async Task<IActionResult> Put(int id, [FromBody] Plan plan)
       {

             if (plan == null){
                return BadRequest();
            }
            else
            {
                var user = await _context.Plans.AsNoTracking().FirstOrDefaultAsync(e => e.PlanId == plan.PlanId);
                if (user == null)
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "User not found",
                    });
                }
                else
                {
                    _context.Entry(plan).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Plan Updated Successfully"
                    });
                }
            }
       }

       // DELETE api/<PlanController>/5
      //  [Route("deletePlan")]
       [HttpDelete("deletePlan/{id}")]
       public async Task<IActionResult> Delete(int id)
       {
             var user = await _context.Plans.FindAsync(id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User not found",
                });
            }
            else
            {
                _context.Plans.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Plan Deleted"
                });
            }
       }
   }
}