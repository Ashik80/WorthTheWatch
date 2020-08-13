using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository repo;
        public MoviesController(IMovieRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUnreleasedMovies()
        {
            var movies = await repo.GetMovies();
            return Ok(movies);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUnreleasedMovie(int id)
        {
            var movie = await repo.GetMovie(id);

            if (movie == null) return NotFound();

            return Ok(movie);
        }
    }
}