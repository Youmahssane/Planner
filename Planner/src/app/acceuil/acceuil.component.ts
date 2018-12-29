import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
 
  constructor(private http: HttpClient) { }

  ngOnInit() {


}
test() {

  const headers = new HttpHeaders();
  headers.append('access-Control-Allow-Origin', '"*"');
this.http.get('https://api.flightstats.com/flex/flightstatus/rest' +
'/v2/json/flight/status/AA/100/arr/2018/12/29?appId=121883c5&appKey=87b1815feacad010586eab81ec7a1b9c&utc=false', {headers} )
.subscribe(res => console.log(JSON.parse(res.toString())));
}
bt2() {
}
}
