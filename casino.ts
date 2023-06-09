import { JuegoDeCasino } from "./JuegoDecasino";

export class Casino{
    private capacidad: number;
    private sector : number;
    private juegos: JuegoDeCasino[];

    public constructor(capacidad:number, sector:number, ){
        this.capacidad = capacidad;
        this.sector = sector;
        this.juegos = []
    }

    public getInfo(): Casino{
        return this 
    }

    public setCasinoGames(games:JuegoDeCasino){
        this.juegos.push(games)
    }
}