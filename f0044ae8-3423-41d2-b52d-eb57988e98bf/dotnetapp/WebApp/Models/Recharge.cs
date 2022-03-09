using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp.Model
{
    public partial class Recharge
    {
        public int RechargeId { get; set; }
        public string Rechargetype { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string RechargePlan { get; set; }
        public int? RechargePrice { get; set; }
    }
}