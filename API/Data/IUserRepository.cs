using System.Threading.Tasks;
using API.Dtos;
using API.Models;

namespace API.Data
{
    public interface IUserRepository
    {
        Task<User> Login(UserForLoginDto userForLogin);

        Task<User> Register(UserForRegisterDto userForRegister);

        Task<bool> UserExists(string email);
    }
}