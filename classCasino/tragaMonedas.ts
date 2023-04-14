import { Juegos } from "./juegos";

export class TragaMonedas extends Juegos{

    public constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,mesa,apuestaMin)
    }

    public numbAleatorio(){ return 1+Math.floor(Math.random()*3)}

    public apuestaTragaMonedas():void{
        let uno:number = this.numbAleatorio()
        let dos:number= this.numbAleatorio()
        let tres:number = this.numbAleatorio()
        console.log(uno,dos,tres)
        if(uno===dos && uno === tres){
            switch(uno){
                case 1: console.log("Ganaste 2 pesos")
                break;
                case 2: console.log("Ganaste 5 pesos")
                break;
                case 3: console.log("Ganaste 10 pesos")
                break;
            }
        }else{
            console.log("Perdiste")
        }
    }
}