import { Injectable } from '@angular/core';
import { Vol } from './vol';
import { Subject } from 'rxjs';
import { InfoSup } from './info-sup';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  private vol: Vol[] = [];
  private infoSup: InfoSup [] = [];
    volSubject = new Subject<Vol[]>();
    infoSubject = new Subject<InfoSup[]>();
    
    emitVol() {
        this.volSubject.next(this.vol);

    }
    addVol(vol: Vol) {
      this.vol = [];
        this.vol.push(vol);
}
emitInfoSup() {
  this.infoSubject.next(this.infoSup.slice());

}
addinfoSup(infoSup: InfoSup ) {
          this.infoSup = [];
          this.infoSup.push(infoSup);
}
}
