import { Juegos } from "./juegos";

export class TragaMonedas extends Juegos{

    public constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,mesa,apuestaMin)
    }

    public numbAleatorio(){ return 1+Math.floor(Math.random()*3)}

    public apuestaTragaMonedas():number{
        let uno:number = this.numbAleatorio()
        let dos:number= this.numbAleatorio()
        let tres:number = this.numbAleatorio()
        console.log(uno,dos,tres)
        if(uno===dos && uno === tres){
            switch(uno){
                case 1: return 2//
                break;
                case 2: return 3
                break;
                case 3: return 4
                break;
                default: return 0
                break;
            }
        }else{
            return 0
        }
    }
}


const tm = new TragaMonedas("nombre",20,1)

const result = tm.apuestaTragaMonedas()
console.log(result)

if(result>0){
    console.log("Ganaste")
}else(
    console.log("Perdiste")
)