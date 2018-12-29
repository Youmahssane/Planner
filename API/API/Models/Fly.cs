using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class Fly
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string name{ get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string postalCode { get; set; }

        [Required]
        public string departure { get; set; }

        [Required]
        public string arrival { get; set; }

        [Required]
        public string estimatedRunwayArrival { get; set; }

        [Required]
        public string flightDurations { get; set; }






    }
}