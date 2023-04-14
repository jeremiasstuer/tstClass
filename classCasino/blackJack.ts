import { Juegos } from "./juegos";

export class BlackJack extends Juegos{

    private misCartas:number[];
    private cartasCroupier:number[];

    public constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,mesa,apuestaMin)
        this.misCartas=[]
        this.cartasCroupier=[]
    }

    numbAleatorio() {return 1 + Math.floor(Math.random() * 11)}

    private sumarCartas(e: number[]){
        let total = e.reduce((a, b) => a + b, 0);
        return total
    }

    private addcrou(){
        if(this.sumarCartas(this.cartasCroupier) <= 16){
            this.cartasCroupier.push(this.numbAleatorio())
        }
    }

    public winLose(mio:number[],crou:number[]){
        if(this.sumarCartas(mio)<=21 && this.sumarCartas(crou) <= 21){
            if(this.sumarCartas(mio) > this.sumarCartas(crou)){
                console.log(`Ganaste... Estos son tus puntos ${this.sumarCartas(mio)}`)
            }else{
                console.log(`Perdiste... Estos son tus puntos ${this.sumarCartas(mio)}`)
            }
        }else if(this.sumarCartas(mio)> 21){
            console.log(`Lo siento te pasas... Estos son tus puntos ${this.sumarCartas(mio)}`)
        }else if(this.sumarCartas(crou)){
            console.log(`El croupier se paso... Estos son sus puntos ${this.sumarCartas(crou)}`)
        }
    }
}   