import { JuegoDeCasino } from "./JuegoDecasino";
import { Poker } from "./Poker";
import { Dados } from "./Dados";
import { Casino } from "./casino";


const juego1 = new Dados("dados","arnold",3,1);
const juego2 = new Poker("poker","ronnie",4,6);


const casino1 = new Casino(800, 806,)
casino1.setCasinoGames(juego1);
casino1.setCasinoGames(juego2);

casino1.getInfo();
console.log(casino1);

 
