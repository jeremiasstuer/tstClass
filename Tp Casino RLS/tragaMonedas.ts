import { Juegos } from "./juegos";

export class TragaMonedas extends Juegos{
    protected icono:any[]
    public constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,mesa,apuestaMin)
        this.icono=[1,2,3]
    }

    public numbAleatorio():number{ 
      return  this.icono[Math.floor(Math.random()*3)]
    }

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
