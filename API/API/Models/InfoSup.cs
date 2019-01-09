using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class InfoSup
    {

           [Key]
        public int idInfo { get; set; }

      
        public string typeAvion { get; set; }

    
        public string transporteur    { get; set; }

      
        public string pisteDecolage { get; set; }
        
        public string destination { get; set; }

      
        public string altitude { get; set; }


      
        public int vitesse { get; set; }

       
        public string orientation { get; set; }

       
        public int distance { get; set; }


        public ICollection<Vol> Vol { get; set; }
    }
}