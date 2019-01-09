export class InfoSup {
    public idInfo: number;
    public typeAvion: string;
    public transporteur: string;
    public pisteDecolage: string;
    public destination: string;
    public  altitude: string;
    public  vitesse: Number;
    public orientation: string;
    public  distance: Number;


    constructor(typeAvion: string, transporteur: string, pisteDecolage: string,
        destination: string, altitude: string, vitesse: Number, orientation: string, distance: Number) {
        this.typeAvion = typeAvion;
        this.transporteur = transporteur;
        this.pisteDecolage = pisteDecolage;
        this.destination = destination;
        this.altitude = altitude;
        this.vitesse = vitesse;
        this.orientation = orientation;
        this.distance = distance;
        }
}
