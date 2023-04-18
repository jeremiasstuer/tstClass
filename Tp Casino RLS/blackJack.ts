import { Juegos } from "./juegos";

export class BlackJack extends Juegos{

    private misCartas:number[];
    private cartasCroupier:number[];

    public constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,mesa,apuestaMin)
        this.misCartas=[]
        this.cartasCroupier=[]
    }

    public getMisCartas():number[]{
        return this.misCartas
    }
    public setMiNuevaCarta(carta:number):void{
        this.misCartas = [...this.misCartas, carta]
    }

    public resetearMano():void{
        this.misCartas = []
        this.cartasCroupier = []
    }

    public getCartarCrou():number[]{
        return this.cartasCroupier
    }

    numbAleatorio() {return 1 + Math.floor(Math.random() * 11)}

    public primMano():void{
        this.misCartas.push(this.numbAleatorio(), this.numbAleatorio())
        this.cartasCroupier.push(this.numbAleatorio(), this.numbAleatorio())
        console.log(`Tus cartas: ${this.misCartas} = ${this.sumarCartas(this.misCartas)}\nLas carta croupier: ${this.cartasCroupier} = ${this.sumarCartas(this.cartasCroupier)}`)
    }

    public sumarCartas(e: number[]){
        let total = e.reduce((a, b) => a + b, 0);
        return total
    }

    public addcrou():void{
        if(this.sumarCartas(this.cartasCroupier) <= 16){
            this.cartasCroupier.push(this.numbAleatorio())
        }
    }

    public validacionOtraCarta(){
        if(this.sumarCartas(this.getMisCartas())<= 21){
            this.sumarCartas(this.getMisCartas())
            this.setMiNuevaCarta(this.numbAleatorio())
            console.log(`Tus cartas = ${this.getMisCartas()} = ${this.sumarCartas(this.getMisCartas())}`)
            
            this.addcrou()
            this.sumarCartas(this.getCartarCrou())
            console.log(`Cartas Croupier = ${this.getCartarCrou()} = ${this.sumarCartas(this.getCartarCrou())}`)

        }
    }

    public winLose(usuario,apuestaUs,premio){
        if(this.sumarCartas(this.getMisCartas())<=21 && this.sumarCartas(this.getCartarCrou()) <= 21){
            if(this.sumarCartas(this.getMisCartas()) > this.sumarCartas(this.getCartarCrou())){
                console.log(`Ganaste... Estos son tus puntos ${this.sumarCartas(this.getMisCartas())}`)
                let win = apuestaUs * premio
                usuario.winMonedas(win)
                console.table(usuario.getInfoUsuario())
            }else{
                let lose = apuestaUs 
                usuario.loseMonedas(lose)
                console.table(usuario.getInfoUsuario())
                console.log(`Perdiste... Estos son tus puntos ${this.sumarCartas(this.getMisCartas())}`)
            } 
        }else if(this.sumarCartas(this.getMisCartas())> 21){
                let lose = apuestaUs 
                usuario.loseMonedas(lose)
                console.table(usuario.getInfoUsuario())
                console.log(`Lo siento te pasas... Estos son tus puntos ${this.sumarCartas(this.getMisCartas())}`)
            }else if( this.sumarCartas(this.getCartarCrou())){
                console.log(`El croupier se paso... Estos son sus puntos ${ this.sumarCartas(this.getCartarCrou())}`)
            }
    }
    
}   