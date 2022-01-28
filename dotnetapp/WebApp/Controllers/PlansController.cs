using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using S2PlansManagement.Data;
using S2PlansManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace S2PlansManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlansController : ControllerBase
    {
        private readonly PlanDbContext _context;
        public PlansController(PlanDbContext context)
        {
            _context = context;
        }
        [HttpGet("getAllPlan")]
        public IActionResult GetAllPlan()
        {
            var planDetails = _context.PlansModels.AsQueryable();
            return Ok(new { StatusCode = 200, planDetails = planDetails });
        }
        [HttpGet("getPlan/{planId}")]

        public IActionResult GetPlan(int planId)
        {
            var plan = _context.PlansModels.Find(planId);
            if (plan == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User not found",
                });
            }
            else
            {
                return Ok(new { StatusCode = 200, planDetail = plan });
            }
        }
        [HttpPost("addPlan")]
        public IActionResult AddPlan([FromBody] PlansModel planModel)
        {
            if (planModel == null)
                return BadRequest();
            else
            {
                _context.PlansModels.Add(planModel);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "New Plan Added Successfully"
                });
            }
        }
        [HttpPut("editPlan")]
        
        public IActionResult EditPlan([FromBody] PlansModel plansModel)
        {  
            if(plansModel == null)
            {
                return BadRequest();
            }
            else
            {
                 var user = _context.PlansModels.AsNoTracking().FirstOrDefault(e => e.planId == plansModel.planId);
                
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
                    _context.Entry(plansModel).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Plan Updated Successfully"
                    });
                }
            }
               
            
        }
    
        [HttpDelete("deletePlan/{planId}")]
        public IActionResult DeletePlan(int planId)
        {
            var user = _context.PlansModels.Find(planId);
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
                _context.PlansModels.Remove(user);
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
