import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vol } from './vol';
import { InfoSup } from './info-sup';
import { Router, RouterLink } from '@angular/router';
import { VolService } from './vol.service';
import { GetRoleService } from './get-role.service';

import 'jquery';
import 'signalr';
import { DatePipe, Time } from '@angular/common';
import { toArray } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';



@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  value: any = 0;
  time: any = 0;
  jQuery = $;
  connection: any;
  tempsRestant: any ;
  duree: any = 0;
  proxy: any;
  index: any = 0;
  allVol: Vol[] = [] ;
  allInfoSup: InfoSup[] = [];
   tab: string [];
  isFlying: Boolean [] = [];
  tabValue: any = [];
  isInRoute: any = false;
  id:any = 0;
  constructor( private volServ: VolService, private http: HttpClient, private router: Router
    , public role: GetRoleService,private toastrService: NbToastrService) {
   
   }
  
  ngOnInit() {
    this.connection = $.hubConnection('http://localhost:51266/signalR');
  
    this.proxy = this.connection.createHubProxy('valuehub');
   
    if (this.allVol.length === 0) {
       this.http.get<InfoSup[]>('http://localhost:51266/api/InfoSups').subscribe(res => this.allInfoSup = res);
       this.http.get<Vol[]>('http://localhost:51266/api/Vols').subscribe(response => { this.allVol = response;

       this.connection.start({ transport: ['webSockets'], jsonp: true })
       .done((data: any) => {
         console.log(data);
         console.log('Now connected ' + data.transport.name + ', connection ID= ' + data.id + ' state = ' + data.state);
         for(let i = 0 ; i < this.allVol.length; i++) {
          const heureArr =  this.timeToSeconds(this.allVol[i].heureArr);
          const heureDep = this.timeToSeconds(this.allVol[i].heureDepart);
          const duree = heureArr - heureDep;

          this.tab = [this.allVol[i].heureDepart, duree.toString(), this.allVol[i].Id.toString(), this.allVol[i].heureArr];
              this.proxy.invoke('sendMessage', this.tab);
         }

   })
   .fail(function (a) {
       console.log('not connected' + a);
   });

    } );
this.registerOnServerEvents();
}

  }

private registerOnServerEvents() {

  this.proxy.on('addMessage', (data: number[]) => {
     this.tabValue[data[3]] =  Math.min(Math.max(Math.round((+data[0] / +data[1]) * 100), 0), 100);

    
   if (data[2] === 1) {
    this.isFlying[data[3]] = true ;
    this.id = data[3];
 } else  if (data [2] ===  0) {
  console.log(data[2]);
   this.isFlying[data[3]] = false;
   this.toastrService.show('Info', 'Le vole numero' + data[3] + ' est terminer ');
 }

 
    
  });

  if (this.isFlying[this.id]) {
    this.toastrService.show('Info', 'Votre vol est en cours... ');
  }


}

  get status() {
    if (this.value <= 25) {
      return 'danger';
    } else if (this.value <= 50) {
      return 'warning';
    } else if (this.value <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }



  toCrud(vol: Vol, infoSup: InfoSup) {
    this.volServ.addVol(vol);
    this.volServ.addinfoSup(infoSup);
   this.router.navigate(['/Acceuil/crudc']);

  }

  delete(vol: Vol) {
    this.http.delete('http://localhost:51266/api/Vols/' + vol.Id).subscribe(res => console.log(res));
    this.http.delete('http://localhost:51266/api/infoSups/' + vol.idInfo).subscribe(res => console.log(res));
      alert('Vous avez supprimer un vol');
  }
  addVol() {
    this.router.navigate(['/Acceuil/addVol']);

  }
  timeToSeconds(time) {
    time = time.split(/:/);
    return time[0] * 3600 + time[1] * 60 ;
}

  chooser(vol: Vol) {

const heure1 = this.timeToSeconds(vol.heureDepart);
const heure2 = this.timeToSeconds(vol.heureArr);
this. duree = heure2 - heure1;

this.tempsRestant = this.secondsTimeSpanToHMS(this.duree);

 $('.time-' + vol.Id).html('<div class=\'time\'>' + this.tempsRestant + '</div>');
console.log(vol.Id);


  }

   secondsTimeSpanToHMS(s): string {
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;
    return h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}

abbo(i) {
  this.proxy.invoke('notification', this.allVol[i].vol);
  this.proxy.on('notif', (data: string) => {

    this.toastrService.show('YOUPI !', 'Un utilisateur est abonné au vol  ' + JSON.stringify(data));

  });
}
}
