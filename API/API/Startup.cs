using System;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;

[assembly: OwinStartup(typeof(API.Startup))]

namespace API
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
         
            app.Map("/signalr", map =>
            {
             
                map.UseCors(CorsOptions.AllowAll);
               
                var hubConfiguration = new HubConfiguration
                {

                };
             
                hubConfiguration.EnableDetailedErrors = true;
                hubConfiguration.EnableJSONP = true;
              
                map.RunSignalR(hubConfiguration);
            });
            // Pour plus d'informations sur la configuration de votre application, visitez https://go.microsoft.com/fwlink/?LinkID=316888
        }
    }
}
