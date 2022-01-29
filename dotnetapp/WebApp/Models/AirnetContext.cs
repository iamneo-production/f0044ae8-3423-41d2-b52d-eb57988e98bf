using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Airnet_Backend.Model
{
    public partial class AirnetContext : DbContext
    {
        public AirnetContext()
        {
        }

        public AirnetContext(DbContextOptions<AirnetContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Addon> Addons { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Login> Logins { get; set; }
        public virtual DbSet<Plan> Plans { get; set; }
        public virtual DbSet<Recharge> Recharges { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=VINOTH\\SQLEXPRESS;Database=Airnet;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Addon>(entity =>
            {
                entity.ToTable("Addon");

                entity.Property(e => e.AddonId).ValueGeneratedNever();

                entity.Property(e => e.AddonDetails).HasMaxLength(50);

                entity.Property(e => e.AddonName).HasMaxLength(50);
            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Admin__A9D10535A2233830");

                entity.ToTable("Admin");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(25);

                entity.Property(e => e.UserRole).HasMaxLength(15);
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Login__A9D105356207150E");

                entity.ToTable("Login");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(25);
            });

            modelBuilder.Entity<Plan>(entity =>
            {
                entity.Property(e => e.PlanId).ValueGeneratedNever();

                entity.Property(e => e.PlanDetails).HasMaxLength(250);

                entity.Property(e => e.PlanName).HasMaxLength(50);

                entity.Property(e => e.PlanOffers).HasMaxLength(100);

                entity.Property(e => e.PlanPrice).HasMaxLength(10);

                entity.Property(e => e.PlanType).HasMaxLength(50);

                entity.Property(e => e.PlanValidity).HasMaxLength(50);
            });

            modelBuilder.Entity<Recharge>(entity =>
            {
                entity.ToTable("Recharge");

                entity.Property(e => e.RechargeId).ValueGeneratedNever();

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Mobile).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(25);

                entity.Property(e => e.RechargePlan).HasMaxLength(50);

                entity.Property(e => e.Rechargetype).HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Users__A9D10535E29D705B");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(25);

                entity.Property(e => e.UserRole).HasMaxLength(15);

                entity.Property(e => e.Username).HasMaxLength(25);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}