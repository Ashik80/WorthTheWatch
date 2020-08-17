using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public interface IWatchListRepository
    {
        void Add<T>(T Entity) where T : class;
        void Remove<T>(T Entity) where T : class;
        Task<List<ReleasedMovie>> GetWatchListedMovies(string userId);
        Task<bool> Save();
        Task<WatchList> GetWatchList(string userId, int movieId);
    }
}