using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class Vol
    {

      
         [Key]
        public int Id { get; set; }

     
        public Boolean isFlying{ get; set; }

    
        public string vol { get; set; }

        public string heureDepart { get; set; }

        public string heureArr{ get; set; }

        public string departure { get; set; }

      
        public string arrival { get; set; }

        
        public string altitude { get; set; }

        [ForeignKey("InfoSup")]
        public int idInfo { get; set; }
        public InfoSup InfoSup{ get; set; }
    }
}
