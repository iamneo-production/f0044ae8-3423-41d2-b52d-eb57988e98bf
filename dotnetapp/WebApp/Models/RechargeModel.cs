
using System.ComponentModel.DataAnnotations;


namespace S2PlansManagement.Models
{
    public class RechargeModel
    {
        [Key]
        public int rechargeId { get; set; }
        public string rechargeType { get; set; }
        public string name { get; set; }
        public string mobile { get; set; }
        public string email { get; set; }
        public int rechargePlan { get; set; }
        public int rechargePrice { get; set; }
      
    }
}
