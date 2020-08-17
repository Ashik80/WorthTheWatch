using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public interface IMovieRepository
    {
        Task<List<UnreleasedMovie>> GetUnreleasedMovies();
        Task<UnreleasedMovie> GetUnreleasedMovie(int id);
        Task<List<ReleasedMovie>> GetReleasedMovies();
        Task<ReleasedMovie> GetReleasedMovie(int id);
    }
}