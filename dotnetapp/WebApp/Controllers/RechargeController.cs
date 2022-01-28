using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using S2PlansManagement.Data;
using Microsoft.EntityFrameworkCore;
using S2PlansManagement.Models;
using System.Linq;
using System.Threading.Tasks;

namespace S2PlansManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RechargeController : ControllerBase
    {
        private readonly RechargeDbContext _context;
        public RechargeController(RechargeDbContext context)
        {
            _context = context;
        }
        [HttpGet("getRecharge")]
        public IActionResult viewAllRecharge()
        {
            var rechargeDetails = _context.RechargesModels.AsQueryable();
            return Ok(new { StatusCode = 200, rechargeDetails = rechargeDetails });
        }
        [HttpGet("getRecharge/{rechargeId}")]

        public IActionResult viewRecharge(int rechargeId)
        {
            var recharge = _context.RechargesModels.Find(rechargeId);
            if (recharge == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Recharge not available",
                });
            }
            else
            {
                return Ok(new { StatusCode = 200, rechargeDetails = recharge });
            }
        }
        [HttpPost("addRecharge")]
        public IActionResult addRecharge([FromBody] RechargeModel rechargeModel)
        {
            if (rechargeModel == null)
                return BadRequest();
            else
            {
                _context.RechargesModels.Add(rechargeModel);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "New Recharge Added Successfully"
                });
            }
        }
        [HttpPut("editRecharge")]

        public IActionResult EditRecharge([FromBody] RechargeModel rechargeModel)
        {
            if (rechargeModel == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.RechargesModels.AsNoTracking().FirstOrDefault(e => e.rechargeId == rechargeModel.rechargeId);

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
                    _context.Entry(rechargeModel).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Recharge Updated Successfully"
                    });
                }
            }


        }







        [HttpDelete("deleteRecharge/{rechargeId}")]
        public IActionResult deleteEvent(int rechargeId)
        {
            var recharge = _context.RechargesModels.Find(rechargeId);
            if (recharge == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Recharge details not found",
                });
            }
            else
            {
                _context.RechargesModels.Remove(recharge);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Recharge details Deleted"
                });
            }
        }
    }
}
