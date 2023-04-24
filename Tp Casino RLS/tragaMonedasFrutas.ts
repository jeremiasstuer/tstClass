import { TragaMonedas } from "./tragaMonedas";

export class TragaMonedasFruta extends TragaMonedas{
     protected icono: any[];
    constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,apuestaMin,mesa)
        this.icono=["banana","manazana","comodin"]
    }
    

    public apuestaTragaMonedas():number{
        let uno:number =  this.numbAleatorio()
        let dos:number= this.numbAleatorio()
        let tres:number = this.numbAleatorio()
        console.log(uno,dos,tres)
        if(uno===dos && dos === tres){
            switch(uno){
                case this.icono[0]: return 2//
                break;
                case this.icono[1]: return 3
                break;
                case this.icono[2]: return 10
                break;
                default: return 0
                break;
            }
        }else{
            return 0
        }
    }
}