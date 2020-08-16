using System.Threading.Tasks;
using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext context;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        public UserRepository(DataContext context, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.context = context;
        }

        public async Task<User> Login(UserForLoginDto userForLogin)
        {
            var user = await context.Users.FirstOrDefaultAsync(x => x.Email == userForLogin.Email);

            if (user == null) return null;

            var result = await signInManager.CheckPasswordSignInAsync(user, userForLogin.Password, false);

            if(!result.Succeeded) return null;

            return user;
        }

        public async Task<User> Register(UserForRegisterDto userForRegister)
        {
            var user = new User
            {
                Email = userForRegister.Email,
                DisplayName = userForRegister.DisplayName,
                UserName = userForRegister.Email
            };

            var result = await userManager.CreateAsync(user, userForRegister.Password);

            if(!result.Succeeded) throw new System.Exception("Problem occured while registering");

            return user;
        }

        public async Task<bool> UserExists(string email)
        {
            return await context.Users.AnyAsync(x => x.Email == email);
        }
    }
}