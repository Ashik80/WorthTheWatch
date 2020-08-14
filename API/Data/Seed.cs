using System.Collections.Generic;
using System.Linq;
using API.Models;
using Newtonsoft.Json;

namespace API.Data
{
    public class Seed
    {
        public static void SeedMovie(DataContext context)
        {
            if (!context.UnreleasedMovie.Any())
            {
                var unreleasedData = System.IO.File.ReadAllText("Data/unreleasedMovieData.json");
                var uMovies = JsonConvert.DeserializeObject<List<UnreleasedMovie>>(unreleasedData);

                context.AddRange(uMovies);
                context.SaveChanges();
            }

            if (!context.ReleasedMovie.Any())
            {
                var releasedData = System.IO.File.ReadAllText("Data/releasedMovieData.json");
                var rMovies = JsonConvert.DeserializeObject<List<ReleasedMovie>>(releasedData);

                context.AddRange(rMovies);
                context.SaveChanges();
            }
        }
    }
}