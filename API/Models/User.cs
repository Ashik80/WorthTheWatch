using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Models
{
    public class User : IdentityUser
    {
        public string DisplayName { get; set; }
        public ICollection<WatchList> WatchLists { get; set; }
    }
}