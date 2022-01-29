using Microsoft.AspNetCore.Mvc;
using Airnet_Backend.Model;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Airnet_Backend.Controllers
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
       public IEnumerable<Plan> Get()
       {
            return _context.Plans.ToList();
       }

       // GET api/<PlanController>/5
       [HttpGet("getPlan/{id}")]
       public IActionResult GetPlan(int id)
       {
            var plan = _context.Plans.Find(id);
            if(plan != null){
                  return Ok(new {StatusCode=200 , Plans = plan});
            }
            return NotFound(new{
                  StatusCode=400,
                  Message = "Plan Not Found"
            });
       }

       // POST api/<PlanController>
      //  [Route("addPlan")]
       [HttpPost("addPlan")]
       public IActionResult Post([FromBody] Plan plan)
       {
             if(plan == null){
                   return BadRequest();
             }
             else{
                   _context.Plans.Add(plan);
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
       public IActionResult Put(int id, [FromBody] Plan plan)
       {

             if (plan == null){
                return BadRequest();
            }
            else
            {
                var user = _context.Plans.AsNoTracking().FirstOrDefault(e => e.PlanId == plan.PlanId);
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
       public IActionResult Delete(int id)
       {
             var user = _context.Plans.Find(id);
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