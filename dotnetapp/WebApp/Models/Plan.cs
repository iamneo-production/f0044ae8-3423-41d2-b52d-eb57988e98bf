using System;
using System.Collections.Generic;

#nullable disable

namespace Airnet_Backend.Model
{
    public partial class Plan
    {
        public int PlanId { get; set; }
        public string PlanType { get; set; }
        public string PlanName { get; set; }
        public string PlanValidity { get; set; }
        public string PlanDetails { get; set; }
        public string PlanPrice { get; set; }
        public string PlanOffers { get; set; }
    }
}