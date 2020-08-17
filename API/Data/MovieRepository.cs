using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class MovieRepository : IMovieRepository
    {
        private readonly DataContext context;
        public MovieRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<UnreleasedMovie> GetUnreleasedMovie(int id)
        {
            var movie = await context.UnreleasedMovie.FirstOrDefaultAsync(x => x.Id == id);

            if (movie == null) return null;

            return movie;
        }

        public async Task<List<UnreleasedMovie>> GetUnreleasedMovies()
        {
            return await context.UnreleasedMovie.ToListAsync();
        }

        public async Task<ReleasedMovie> GetReleasedMovie(int id)
        {
            var movie = await context.ReleasedMovie.FirstOrDefaultAsync(x => x.Id == id);

            return movie;
        }

        public async Task<List<ReleasedMovie>> GetReleasedMovies()
        {
            return await context.ReleasedMovie.ToListAsync();
        }
    }
}