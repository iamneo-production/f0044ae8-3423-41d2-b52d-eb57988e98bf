using WebApp.Model;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


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
            public IEnumerable<User> Get()
            {
                  return _context.Users.ToList();
            }

            // GET api/<PlanController>/5
            [HttpGet("getUser/{email}")]
            public IActionResult GetPlan(string email)
            {
                  var plan = _context.Users.Find(email);
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
            public IActionResult Post([FromBody] User plan)
            {
                  if (plan == null)
                  {
                        return BadRequest(new{
                              Message = "Invalid Data"
                        });
                  }
                  else
                  {
                        _context.Users.Add(plan);
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
            public IActionResult Put(string email, [FromBody] User plan)
            {
                  if (plan == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        var user = _context.Users.AsNoTracking().FirstOrDefault(e => e.Email.Equals(plan.Email));
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
            public IActionResult Delete(string email)
            {
                  var user = _context.Users.Find(email);
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
