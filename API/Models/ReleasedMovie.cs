using System.Collections.Generic;

namespace API.Models
{
    public class ReleasedMovie : Movie
    {
        public decimal Rating { get; set; }
        public ICollection<WatchList> WatchLists { get; set; }
    }
}