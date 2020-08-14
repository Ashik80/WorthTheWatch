using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public interface IMovieRepository
    {
        Task<IEnumerable<UnreleasedMovie>> GetUnreleasedMovies();
        Task<UnreleasedMovie> GetUnreleasedMovie(int id);
        Task<IEnumerable<ReleasedMovie>> GetReleasedMovies();
        Task<ReleasedMovie> GetReleasedMovie(int id);
    }
}