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

        public async Task<Movie> GetMovie(int id)
        {
            var movie = await context.UnreleasedMovie.FirstOrDefaultAsync(x => x.Id == id);

            if (movie == null) return null;

            return movie;
        }

        public async Task<IEnumerable<Movie>> GetMovies()
        {
            return await context.UnreleasedMovie.ToListAsync();
        }
    }
}