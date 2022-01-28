using Microsoft.EntityFrameworkCore;
using S2PlansManagement.Models;


namespace S2PlansManagement.Data
{
    public class PlanDbContext : DbContext
    {
        public PlanDbContext()
        {
        }

        public PlanDbContext(DbContextOptions<PlanDbContext> options) : base(options)
        {

        }
        public DbSet<PlansModel> PlansModels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            modelBuilder.Entity<PlansModel>().ToTable("tbl_plans");
        }
    }
}
