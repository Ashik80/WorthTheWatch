using API.Dtos;
using API.Models;
using AutoMapper;

namespace API.MappingProfile
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ReleasedMovie, ReleasedMovieDto>();
        }
    }
}