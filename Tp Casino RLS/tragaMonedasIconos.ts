import { TragaMonedas } from "./tragaMonedas";

export class TragaMonedasIconos extends TragaMonedas{
    protected icono: any[];
    constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,apuestaMin,mesa)
        this.icono=["♠","♥","♦","♣"]
    }
    
    public apuestaTragaMonedas():number{
        let uno:number =  this.numbAleatorio()
        let dos:number= this.numbAleatorio()
        let tres:number = this.numbAleatorio()
        let cuatro:number = this.numbAleatorio()
        console.log(uno,dos,tres,cuatro)
        if(uno===dos && dos === tres && tres === cuatro){
            switch(uno){
                case this.icono[0]: return 5//
                break;
                case this.icono[1]: return 10
                break;
                case this.icono[2]: return 15
                break;
                case this.icono[3]: return 20
                break;
                default: return 0
                break;
            }
        }else{
            return 0
        }
    }
}