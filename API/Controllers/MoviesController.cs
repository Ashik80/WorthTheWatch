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
            var movies = await repo.GetUnreleasedMovies();
            return Ok(movies);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUnreleasedMovie(int id)
        {
            var movie = await repo.GetUnreleasedMovie(id);

            if (movie == null) return NotFound();

            return Ok(movie);
        }

        [HttpGet("released")]
        public async Task<IActionResult> GetReleasedMovies()
        {
            var movies = await repo.GetReleasedMovies();
            return Ok(movies);
        }

        [HttpGet("released/{id}")]
        public async Task<IActionResult> GetReleasedMovie(int id)
        {
            var movie = await repo.GetReleasedMovie(id);
            if(movie == null) return NotFound();
            return Ok(movie);
        }
    }
}