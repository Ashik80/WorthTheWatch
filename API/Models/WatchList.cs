namespace API.Models
{
    public class WatchList
    {
        public string UserId { get; set; }
        public User User { get; set; }
        public int MovieId { get; set; }
        public ReleasedMovie Movie { get; set; }
    }
}