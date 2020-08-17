using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class WatchListRepository : IWatchListRepository
    {
        private readonly DataContext context;
        public WatchListRepository(DataContext context)
        {
            this.context = context;
        }

        public void Add<T>(T Entity) where T : class
        {
            context.Add(Entity);
        }

        public void Remove<T>(T Entity) where T : class
        {
            context.Remove(Entity);
        }

        public async Task<bool> Save()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public async Task<List<ReleasedMovie>> GetWatchListedMovies(string userId)
        {
            var watchList = await context.WatchList.Where(x => x.UserId == userId).ToListAsync();
            
            var movieList = new List<ReleasedMovie>();
            foreach(var item in watchList)
            {
                var movie = await context.ReleasedMovie.FirstOrDefaultAsync(x => x.Id == item.MovieId);
                movieList.Add(movie);
            }

            return movieList;
        }

        public async Task<WatchList> GetWatchList(string userId, int movieId)
        {
            return await context.WatchList.FirstOrDefaultAsync(x => x.UserId == userId && x.MovieId == movieId);
        }
    }
}