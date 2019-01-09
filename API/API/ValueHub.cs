using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Timers;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace API
{
    [HubName("ValueHub")]
    public class ValueHub : Hub
    {
    
        DateTime heureDep;
        DateTime heureArr;
        int [] tempandi = new int[4];
        static ArrayList threadActif = new ArrayList();
        int tempsRestant;
  
        public void notification(string vol)
        {

            Clients.All.notif(vol);

        }
        public void sendMessage(string [] infoVol)
        {

           
         

            if (!threadActif.Contains(Int32.Parse(infoVol[2]))){
           
                int heure = Int32.Parse(infoVol[0].Split(':')[0]);
                int minute= Int32.Parse(infoVol[0].Split(':')[1]);
                heureDep = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, heure, minute, 0);
            int heureA = Int32.Parse(infoVol[3].Split(':')[0]);
            int minuteA = Int32.Parse(infoVol[3].Split(':')[1]);
                heureArr = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, heureA, minuteA, 0);
            tempsRestant = Int32.Parse(infoVol[1]);                      
                tempandi[1] = tempsRestant;
    
                new Thread(() => comptage(Int32.Parse(infoVol[2]),heureDep, heureArr)).Start(); 

            }
         


        }

        private void comptage(int id,DateTime heureDep,DateTime heureArr)
        {
            tempandi[3] = id;
            threadActif.Add(id);
          
            int i = 0;
            while (i<tempsRestant)
            {
                  
                while ((DateTime.Now >= heureDep && DateTime.Now < heureArr) && i < tempsRestant)
                {
                 
                    if (tempandi[2] != 1)
                    {
                        tempandi[2] = 1;
                    }
                    tempandi[0] = i;
                    Clients.All.addMessage(tempandi);
                    System.Threading.Thread.Sleep(800);
                    i++;
                }
                if(tempandi[2] != 0)
                {
                tempandi[2] = 0;
                tempandi[0]= 0;
                    Clients.All.addMessage(tempandi);
                }  
                System.Threading.Thread.Sleep(15000);


            }
          
        }

    }

    
    
}