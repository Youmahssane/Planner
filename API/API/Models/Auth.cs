using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class Auth
    {
      public int id { get; set; }
        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }


        public string role { get; set; }
    }

}