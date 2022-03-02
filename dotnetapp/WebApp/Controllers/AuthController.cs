using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApp.Model;
using System.Threading.Tasks;

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AirnetContext _airnetContext;
            public AuthController(AirnetContext context)
            {
                  _airnetContext = context;
            }
            [HttpPost("user/login")]
            public async Task<IActionResult> IsUserPresent([FromBody] Login data)
            {
                  var user = await _airnetContext.Users.FindAsync(data.Email);

                  if (user != null && data.Email.Equals(user.Email) && data.Password.Equals(user.Password))
                  {
                        if (user.UserRole.Equals("admin"))
                        {
                              return Ok(new { StatusCode = 200, Message = "Admin Authenticated", Allowed = true, UserRole = "admin", User = user.Username, Email = user.Email });
                        }
                        else if (user.UserRole.Equals("user"))
                        {
                              return Ok(new { StatusCode = 200, Message = "User Authenticated", Allowed = true, UserRole = "user", User = user.Username, Email = user.Email });
                        }
                  }
                  return BadRequest(new { StatusCode = 400, Message = "User Not Available", Allowed = false });
            }


            [HttpPost("user/signup")]
            public async Task<IActionResult> saveUser(User data)
            {
                  var user = await _airnetContext.Users.FindAsync(data.Email);

                  if (user == null)
                  {
                        await _airnetContext.Users.AddAsync(data);
                        _airnetContext.SaveChanges();

                        return Ok(new { StatusCode = 200, Message = "User Added" });
                  }
                  return BadRequest(new { StatusCode = 400, Message = "Already a User Available" });
            }
    }
}
