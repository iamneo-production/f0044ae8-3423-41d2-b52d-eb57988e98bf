using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp.Model
{
    public partial class Addon
    {
        public int AddonId { get; set; }
        public string AddonName { get; set; }
        public int? AddonPrice { get; set; }
        public string AddonDetails { get; set; }
        public int? AddonValidity { get; set; }
    }
}