import { JuegoDeCasino } from "./JuegoDecasino"

export class Dados extends JuegoDeCasino{
    apostadores: number;


    public constructor( name:string, jugador:string, fichas: number, apostadores: number){
        super (name,jugador,fichas);
        this.apostadores =apostadores
    }

    public getInfo(): Dados {
         return this
    
    }


}