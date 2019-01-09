using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class Register
    {
        [Key]
        public int idRegister { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string fullName { get; set; }

        [Required]
        public string password { get; set; }

    
    }
}