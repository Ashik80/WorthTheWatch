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
    }
}