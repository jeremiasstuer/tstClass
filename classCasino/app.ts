import { Casino } from "./casino";
import { Usuario } from "./usuario";
import { Ruleta } from "./ruleta";
import { Juegos } from "./juegos";
import { BlackJack } from "./blackJack";
import { TragaMonedas } from "./tragaMonedas";

/*
const ruleta:Ruleta[] = [ new Ruleta("Ruleta",20,1),
    new Ruleta("Ruleta",60,2),
    new Ruleta("Ruleta",100,3)
  ]
const blacJack:BlackJack[]= [ new BlackJack("BlackJack",20,1),
        new BlackJack("BlackJack",60,2),
        new BlackJack("BlackJack",100,3)
      ]
const tragaMonedas:TragaMonedas[] = [ new TragaMonedas("Traga monedas",20,1),
                new TragaMonedas("Traga monedas",60,2),
                new TragaMonedas("Traga monedas",100,3)
              ]
*/



const casinoLf:Casino = new Casino("Las Flores","Ruta 3")

casinoLf.setJuegos(new Ruleta("nombre",30,1))
casinoLf.setJuegos(new Ruleta("nombre",40,2))

const usuario01:Usuario = new Usuario("Jeremias",20,10000)
casinoLf.setUsuario(usuario01)


console.log(casinoLf.getInfoCasino())
