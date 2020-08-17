using API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : IdentityDbContext<User>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<ReleasedMovie> ReleasedMovie { get; set; }
        public DbSet<UnreleasedMovie> UnreleasedMovie { get; set; }
        public DbSet<WatchList> WatchList { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            
            builder.Entity<WatchList>(x => {
                x.HasKey(x => new {x.MovieId, x.UserId});

                x.HasOne(x => x.Movie)
                    .WithMany(x => x.WatchLists)
                    .OnDelete(DeleteBehavior.Restrict);

                x.HasOne(x => x.User)
                    .WithMany(x => x.WatchLists)
                    .OnDelete(DeleteBehavior.Restrict);
            });
        }
    }
}