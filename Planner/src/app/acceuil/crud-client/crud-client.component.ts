import { Component, OnInit } from '@angular/core';
import { Vol } from '../vol';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VolService } from '../vol.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InfoSup } from '../info-sup';

@Component({
  selector: 'app-crud-client',
  templateUrl: './crud-client.component.html',
  styleUrls: ['./crud-client.component.scss']
})
export class CrudClientComponent implements OnInit {
  vol:  Vol[];
  infoSub: InfoSup[];
  volSubs: Subscription;
  ifExist: Boolean = false;
  modifierForm: FormGroup;
  modifierFormSub: FormGroup;
  constructor( private formBuilder: FormBuilder, private formBuilder2: FormBuilder,
 private volService: VolService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {

    this.volSubs = this.volService.volSubject.subscribe((vol: Vol[]) => {
      this.vol = vol;
    if (this.vol.length === 0) {
      this.ifExist = false;
    } else {
      this.ifExist = true;

      this.volService.infoSubject.subscribe((info: InfoSup[]) => {
        this.infoSub = info;

       this.initFormSub();
      });
         this.initForm();
    }
    }) ;

    this.volService.emitVol();
    this.volService.emitInfoSup();

  }

  initForm() {
    this.modifierForm = this.formBuilder.group({
      Id: this.vol[0].Id,
      isFlying: this.vol[0].isFlying,
      vol: this.vol[0].vol,
      departure: this.vol[0].departure,
      arrival: this.vol[0].arrival,
      altitude: this.vol[0].altitude,
      idInfo: this.vol[0].idInfo,
      heureArr: this.vol[0].heureArr,
      heureDepart: this.vol[0].heureDepart
});

  }
  initFormSub() {
    this.modifierFormSub = this.formBuilder2.group({
      idInfo: this.infoSub[0].idInfo,
      typeAvion: this.infoSub[0].typeAvion,
      transporteur: this.infoSub[0].transporteur,
      pisteDecolage: this.infoSub[0].pisteDecolage,
      destination: this.infoSub[0].destination,
      vitesse: this.infoSub[0].vitesse,
      orientation: this.infoSub[0].orientation,
      distance: this.infoSub[0].distance,
      altitude: +this.modifierForm.value['altitude']
    });

  }




  onSubmitVol() {

      this.http.put('http://localhost:51266/api/Vols/' + this.vol[0].Id, this.modifierForm.value).subscribe(res =>
       alert('La modification du vol a été effecuer'));

  }

  onSubmitSub() {

    this.http.put('http://localhost:51266/api/InfoSups/' + this.infoSub[0].idInfo, this.modifierFormSub.value).subscribe(res =>
     alert('La modification du des infos supp a été effecuer'));

}


}
