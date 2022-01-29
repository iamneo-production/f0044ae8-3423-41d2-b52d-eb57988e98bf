using System;
using System.Collections.Generic;

#nullable disable

namespace S2PlansManagement.Models
{
    public partial class User
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public long? MobileNumber { get; set; }
        public string UserRole { get; set; }
    }
}