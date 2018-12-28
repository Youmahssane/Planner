import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {


}
test()  {
  // const obs: Observable<any> = null;
  this.http.get('https://api.flightstats.com/flex/flightstatus/rest/v2/'
  + 'json/flight/status/AA/100/dep/2018/12/27?'
  + 'appId=121883c5&appKey=87b1815feacad010586eab81ec7a1b9c&utc=false').subscribe( res => {
    console.log( res); }) ;
// return obs;
}

}
