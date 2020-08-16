using System.ComponentModel.DataAnnotations;
using FluentValidation;

namespace API.Dtos
{
    public class UserForRegisterDto
    {
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class UserForRegisterDtoValidator : AbstractValidator<UserForRegisterDto>
    {
        public UserForRegisterDtoValidator()
        {
            RuleFor(x => x.DisplayName).NotEmpty();
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.Password)
                .MinimumLength(6).WithMessage("Password must be atleast 6 letters")
                .Matches("[a-z]").WithMessage("Password must contain atleast 1 lowercase letter")
                .Matches("[A-Z]").WithMessage("Password must contain atleast 1 uppercase letter")
                .Matches("[0-9]").WithMessage("Password must contain atleast 1 number");
        }
    }
}