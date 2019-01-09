export class Vol {
    public Id:  Number;
    public isFlying: Boolean;
    public vol: string;
    public heureArr: string;
    public heureDepart: string;
    public departure: string;
    public arrival: string;
    public altitude: string;
    public idInfo: Number;

    constructor( isFlying: Boolean, vol: string, departure: string, arrival: string, altitude: string, idInfo: Number, heurearr:string, heureDepart:string){
this.isFlying = isFlying;
this.vol = vol;
this.departure = departure;
this.arrival = arrival;
this.altitude = altitude;
this.idInfo = idInfo;
this.heureArr= heurearr;
this.heureDepart = heureDepart;
    }

}
