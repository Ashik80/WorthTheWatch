using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository repo;
        private readonly IMapper mapper;
        public MoviesController(IMovieRepository repo, IMapper mapper)
        {
            this.mapper = mapper;
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
            var moviesDto = mapper.Map<List<ReleasedMovie>, List<ReleasedMovieDto>>(movies);
            return Ok(moviesDto);
        }

        [HttpGet("released/{id}")]
        public async Task<IActionResult> GetReleasedMovie(int id)
        {
            var movie = await repo.GetReleasedMovie(id);
            if (movie == null) return NotFound();
            var movieDto = mapper.Map<ReleasedMovie, ReleasedMovieDto>(movie);
            return Ok(movieDto);
        }
    }
}