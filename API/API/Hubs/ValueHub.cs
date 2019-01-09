using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace API
{
    [HubName("Value")]
    public class ValueHub : Hub
    {
        public void Hello(string message)
        {
            Clients.All.SendAsync("Send",message);
        }
    }
}