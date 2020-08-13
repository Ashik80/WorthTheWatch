using System.Collections.Generic;
using System.Linq;
using API.Models;
using Newtonsoft.Json;

namespace API.Data
{
    public class Seed
    {
        public static void SeedUnreleasedMovie(DataContext context)
        {
            if (!context.UnreleasedMovie.Any())
            {
                var unreleasedData = System.IO.File.ReadAllText("Data/unreleasedMovieData.json");
                var uMovies = JsonConvert.DeserializeObject<List<UnreleasedMovie>>(unreleasedData);

                context.AddRange(uMovies);
                context.SaveChanges();
            }
        }
    }
}