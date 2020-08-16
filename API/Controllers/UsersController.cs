using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository repo;
        private readonly IJwtGenerator jwtGenerator;
        public UsersController(IUserRepository repo, IJwtGenerator jwtGenerator)
        {
            this.jwtGenerator = jwtGenerator;
            this.repo = repo;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLogin)
        {
            var user = await repo.Login(userForLogin);

            if (user == null) return Unauthorized();

            var token = jwtGenerator.GetToken(user);

            return Ok(new { token = token });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegister)
        {
            var userExists = await repo.UserExists(userForRegister.Email);

            if (userExists) return BadRequest("Username already exists");

            var user = await repo.Register(userForRegister);

            var token = jwtGenerator.GetToken(user);

            return Ok(new { token = token });
        }
    }
}