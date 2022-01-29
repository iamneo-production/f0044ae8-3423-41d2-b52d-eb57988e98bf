using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using S2PlansManagement.Data;
using S2PlansManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace S2PlansManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddOnController : ControllerBase
    {
        private readonly AddonDbContext _context;
        public AddOnController(AddonDbContext context)
        {
            _context = context;
        }
        [HttpGet("getAddons")]
        public IActionResult getAllAddon()
        {
            var g_addon = _context.AddonModels.AsQueryable();
            return Ok(new { StatusCode = 200, AddonDetails = g_addon });
        }
        [HttpGet("getAddon/{id}")]

        public IActionResult getAddon(int addonId)
        {
            var addon = _context.AddonModels.Find(addonId);
            if (addon == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Addon not available",
                });
            }
            else
            {
                return Ok(new { StatusCode = 200, AddonDetails = addon });
            }
        }
        [HttpPost("addAddon")]
        public IActionResult addAddon([FromBody] AddonModel addonModel)
        {
            if (addonModel == null)
                return BadRequest();
            else
            {
                _context.AddonModels.Add(addonModel);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "New Addon Added Successfully"
                });
            }
        }

        [HttpPut("editAddon/{id}")]
        public IActionResult editAddon([FromBody] AddonModel addonModel)
         {
             if (addonModel == null)
                 return BadRequest();
             else
             {
                 var user = _context.AddonModels.AsNoTracking().FirstOrDefault(e => e.addonId == addonModel.addonId);
                 if (user == null)
                 {
                     return NotFound(new
                     {
                         StatusCode = 404,
                         Message = "addon not found",
                     });
                 }
                 else
                 {
                     _context.Entry(addonModel).State = EntityState.Modified;
                     _context.SaveChanges();
                     return Ok(new
                     {
                         StatusCode = 200,
                         Message = "Addon Details Updated Successfully"
                     });
                 }
             }
         }

        [HttpDelete("deleteAddon/{id}")]
        public IActionResult deleteAddon(int addonId)
        {
            var addon = _context.AddonModels.Find(addonId);
            if (addon == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Addon details not found",
                });
            }
            else
            {
                _context.AddonModels.Remove(addon);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Addon details Deleted"
                });
            }
        }


    }
}
