using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace S2PlansManagement.Models
{
    public class PlansModel
    {
        [Key]
        public int planId { get; set; }
        public string planType { get; set; }
        public string planName { get; set; }
        public string planValidity { get; set; }
        public string planDetails { get; set; }
        public string planPrice { get; set; }
        public string planOffers { get; set; }
    }
}
