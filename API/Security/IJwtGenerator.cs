using API.Models;

namespace API.Security
{
    public interface IJwtGenerator
    {
        string GetToken(User user);
    }
}