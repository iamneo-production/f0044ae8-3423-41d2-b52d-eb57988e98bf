using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApp.Model;

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AirnetContext _airnetContext;
        public AuthController(AirnetContext context){
            _airnetContext = context;
        }
        [HttpPost("user/login")]
        public IActionResult IsUserPresent([FromBody] Login data)
        {
            var user = _airnetContext.Users.Find(data.Email);
            
            if (user != null && data.Email.Equals(user.Email) && data.Password.Equals(user.Password))
            {
                return Ok(new { StatusCode = 200, Message = "User Authenticated", Allowed = true , User =  user.Username});

            }
            return BadRequest(new { StatusCode = 400 , Message = "User Not Available", Allowed = false });
        }


        [HttpPost("user/signup")]
        public IActionResult saveUser(User data)
        {
            var user = _airnetContext.Users.Find(data.Email);
            
            if (user == null)
            {
                _airnetContext.Users.Add(data);
                // _airnetContext.Logins.Add(new Login { Email = data.Email, Password = data.Password });
                _airnetContext.SaveChanges();
                
                return Ok(new { StatusCode = 200, Message = "User Added"});
            }
            return BadRequest(new { StatusCode = 400 , Message = "Already a User Available" });
        }




        [HttpPost("admin/login")]
        public IActionResult isAdminPresent([FromBody] Login data)
        {
            var user = _airnetContext.Users.Find(data.Email);
            //  && user.UserRole.Equals("admin")
            if (user != null && (data.Email.Equals(user.Email) && data.Password.Equals(user.Password)))
            {
                return Ok(new { StatusCode = 200, Message = "Admin Authenticated", Allowed = true } );
            }
            return BadRequest(new { StatusCode = 400, Message = "Admin Not Found", Allowed = false });

        }


        [HttpPost("admin/signup")]

        public IActionResult saveAdmin(User data)
        {
            var user = _airnetContext.Users.Find(data.Email);
            if (user == null)
            {
                _airnetContext.Users.Add(data);
                _airnetContext.Admins.Add(new Admin { Email = data.Email, 
                            Password = data.Password , MobileNumber = data.MobileNumber , UserRole = data.UserRole});
                return Ok(new { StatusCode = 200, Message = "Admin Added SuccessFully" });
            }
            return BadRequest(new { StatusCode = 400, Message = "Admin Already Avaliable" });

        }
    }
}
