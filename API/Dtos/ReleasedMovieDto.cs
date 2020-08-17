using System;

namespace API.Dtos
{
    public class ReleasedMovieDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Genre { get; set; }
        public string ThumbNail { get; set; }
        public string PgRating { get; set; }
        public string Duration { get; set; }
        public DateTime ReleaseInfo { get; set; }
        public string TrailerUrl { get; set; }
        public decimal Rating { get; set; }
    }
}