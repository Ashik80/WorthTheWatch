using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WatchlistController : ControllerBase
    {
        private readonly IWatchListRepository watchRepo;
        private readonly IMovieRepository movieRepo;
        private readonly IMapper mapper;
        public WatchlistController(IWatchListRepository watchRepo, IMovieRepository movieRepo, IMapper mapper)
        {
            this.mapper = mapper;
            this.movieRepo = movieRepo;
            this.watchRepo = watchRepo;
        }

        private string GetUserId()
        {
            return User.FindFirst(ClaimTypes.NameIdentifier).Value;
        }

        [HttpGet]
        public async Task<IActionResult> GetWatchlistedMovies()
        {
            var movies = await watchRepo.GetWatchListedMovies(GetUserId());

            var moviesDto = mapper.Map<List<ReleasedMovie>, List<ReleasedMovieDto>>(movies);

            return Ok(moviesDto);
        }

        [HttpPost("{movieId}")]
        public async Task<IActionResult> AddToWatchList(int movieId)
        {
            var existingWatchlist = await watchRepo.GetWatchList(GetUserId(), movieId);

            if(existingWatchlist != null)
                return BadRequest("Movie added already");

            var movie = await movieRepo.GetReleasedMovie(movieId);

            if (movie == null) return NotFound();

            var watchList = new WatchList
            {
                UserId = GetUserId(),
                Movie = movie
            };

            watchRepo.Add(watchList);

            if (await watchRepo.Save()) return Ok();

            throw new Exception("Problem adding to watchlist");
        }

        [HttpDelete("{movieId}")]
        public async Task<IActionResult> RemoveFromWatchList(int movieId)
        {
            var watchList = await watchRepo.GetWatchList(GetUserId(), movieId);

            if(watchList == null)
                return BadRequest("Item does not exist in watchlist");

            var movie = await movieRepo.GetReleasedMovie(movieId);

            if(movie == null) return NotFound();

            watchRepo.Remove(watchList);

            if (await watchRepo.Save()) return Ok();

            throw new Exception("Problem removing from watchlist");
        }
    }
}