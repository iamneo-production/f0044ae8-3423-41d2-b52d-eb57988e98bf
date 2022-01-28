using Microsoft.EntityFrameworkCore;
using S2PlansManagement.Models;


namespace S2PlansManagement.Data
{
    public class AddonDbContext : DbContext
    {
        public AddonDbContext(DbContextOptions<AddonDbContext> options) : base(options)
        {

        }
        public DbSet<AddonModel> AddonModels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AddonModel>().ToTable("tbl_addon");
        }
    }
}
