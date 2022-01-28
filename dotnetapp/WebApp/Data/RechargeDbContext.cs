using Microsoft.EntityFrameworkCore;
using S2PlansManagement.Models;


namespace S2PlansManagement.Data
{
    public class RechargeDbContext : DbContext
    {
        public RechargeDbContext(DbContextOptions<RechargeDbContext> options) : base(options)
        {

        }
        public DbSet<RechargeModel> RechargesModels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RechargeModel>().ToTable("tbl_recharge");
        }
    }
}
