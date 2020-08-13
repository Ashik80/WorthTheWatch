using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<ReleasedMovie> ReleasedMovie { get; set; }
        public DbSet<UnreleasedMovie> UnreleasedMovie { get; set; }
    }
}