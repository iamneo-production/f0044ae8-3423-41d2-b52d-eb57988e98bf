using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp.Model
{
    public partial class Admin
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public long? MobileNumber { get; set; }
        public string UserRole { get; set; }
    }
}