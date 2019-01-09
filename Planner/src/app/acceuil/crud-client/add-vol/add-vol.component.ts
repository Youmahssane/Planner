import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vol } from '../../vol';
import { InfoSup } from '../../info-sup';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.scss']
})
export class AddVolComponent implements OnInit {
  key: any;
  formVol: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.formVol = this.formBuilder.group({
      vol: '',
      departure: '',
      arrival: '',
      altitude: '',
      idInfo: '',
      typeAvion: '',
      transporteur: '',
      pisteDecolage: '',
      destination: '',
      vitesse: '',
      orientation: '',
      distance: '',
      heureA: '',
      heureD: ''
});
  }
  onSubmit() {


    const infoSup: InfoSup = new InfoSup(this.formVol.value['typeAvion'],
    this.formVol.value['transporteur'], this.formVol.value['pisteDecolage'],
    this.formVol.value['destination'], this.formVol.value['altitude'],
    +this.formVol.value['vitesse'], this.formVol.value['orientation'], +this.formVol.value['distance'],);

this.http.post<InfoSup>('http://localhost:51266/api/InfoSups', infoSup).subscribe(res => {
this.key = res.idInfo;
const vol: Vol = new Vol(false, this.formVol.value['vol'], this.formVol.value['departure'],
   this.formVol.value['arrival'], this.formVol.value['altitude'], this.key, this.formVol.value['heureA'],this.formVol.value['heureD']);
     this.http.post('http://localhost:51266/api/Vols', vol).subscribe(() => this.router.navigate(['/Acceuil/acceuil']));
});


  }
 
}
