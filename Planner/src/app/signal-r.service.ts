import { Injectable, EventEmitter } from '@angular/core';

import 'jquery';
import 'signalr';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  jQuery = $;
  connection: any;
  messageReceived: EventEmitter<String>;
  proxy: any;
  constructor() { }

  startConnection(): void {
    this.connection = $.hubConnection('http://localhost:51266/signalr');
    this.messageReceived = new EventEmitter <string> ();
         this.proxy = this.connection.createHubProxy('ValueHub');
         this.proxy.on('Hello', 'test');

         this.connection.start({ transport: ['webSockets'], jsonp: true })
         .done((data: any) => {
           console.log('Now connected ' + data.transport.name + ', connection ID= ' + data.id);
     })
     .fail(function (a) {
         console.log('not connected' + a);
     }); }

     registerOnServerEvents(): void {

  this.proxy.on('setRealTime', (data: string) => {
      console.log('received in SignalRService: ' + JSON.stringify(data));
      this.messageReceived.emit(data);
  });
}
}
