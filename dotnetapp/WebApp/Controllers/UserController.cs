using WebApp.Model;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace WebApp.Controllers
{
    [Route("admin/users/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AirnetContext _context;
            public UserController(AirnetContext context)
            {
                  _context = context;
            }

            // GET: api/<PlanController>
            [HttpGet("getUsers")]
            public async Task<IEnumerable<User>> Get()
            {
                  return await _context.Users.ToListAsync();
            }

            // GET api/<PlanController>/5
            [HttpGet("getUser/{email}")]
            public async Task<IActionResult> GetPlan(string email)
            {
                  var plan = await _context.Users.FindAsync(email);
                  if (plan != null)
                  {
                        return Ok(new { StatusCode = 200, Plans = plan });
                  }
                  return NotFound(new
                  {
                        StatusCode = 400,
                        Message = "User Not Found"
                  });
            }

            // POST api/<PlanController>
            //  [Route("addPlan")]
            [HttpPost("addUser")]
            public async Task<IActionResult> Post([FromBody] User plan)
            {
                  if (plan == null)
                  {
                        return BadRequest(new
                        {
                              Message = "Invalid Data"
                        });
                  }
                  else
                  {
                        await _context.Users.AddAsync(plan);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "User Added Successufully"
                        });
                  }
            }

            // PUT api/<PlanController>/5
            //  [Route("editPlan")]
            [HttpPut("editUser/{email}")]
            public async Task<IActionResult> Put(string email, [FromBody] User plan)
            {
                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        var user = await _context.Users.AsNoTracking().FirstOrDefaultAsync(e => e.Email.Equals(email));
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
                                    Message = "User Updated Successfully"
                              });
                        }
                  }
            }

            // DELETE api/<PlanController>/5
            //  [Route("deletePlan")]
            [HttpDelete("deleteUser/{email}")]
            public async Task<IActionResult> Delete(string email)
            {
                  var user = await _context.Users.FindAsync(email);
                  if (user == null)
                  {
                        return NotFound(new
                        {
                              StatusCode = 404,
                              Message = "User Not Found",
                        });
                  }
                  else
                  {
                        _context.Users.Remove(user);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "User Deleted"
                        });
                  }
            }
      }
}
