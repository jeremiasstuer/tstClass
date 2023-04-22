import { Juegos } from "./juegos.js";

export class Ruleta extends Juegos{

    private rojo:number[];
    private negro:number[];
    private verde:number;
    private par:number[];
    private impar:number[];
    private numeros:number[]

    public constructor(nombre:string,apuestaMin:number,mesa:number){
        super(nombre,mesa,apuestaMin)
        this.rojo = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
        this.negro = [2,4,3,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
        this.verde = 0
        this.impar = []
        this.par = []
        this.numeros = this.rojo.concat(this.negro)
    }

    public numbAleatorio() { return Math.floor(Math.random()*36) }
    
    public parImpar(){
        for(let i = 1; i <= this.numeros.length; i++){
            if(i%2 == 0){
                this.par.push(i)
            }else{
                this.impar.push(i)
            }
        }
    }

    public apuestaColorN():boolean{
        let numbAleatorio = this.numbAleatorio()

        if(this.negro.indexOf(numbAleatorio) != -1){
            
            return true
        }else{
            return false
        }
    }  

    public apuestaColorR():boolean{
        let numbAleatorio = this.numbAleatorio()

        if(this.rojo.indexOf(numbAleatorio) != -1){
           return true
        }else{
            return false 
        }
    }  

    public apuestaColorV():boolean{
        let numbAleatorio = this.numbAleatorio()
        if(this.verde === numbAleatorio){
            return true
        }else{
            return false
        }
    }

    public apuestaPar():boolean{
        this.parImpar()
        let resultAleatorio = this.numbAleatorio()
       
        if(this.par.indexOf(resultAleatorio) != -1){
            return true
        }else{
            return false
        }
    }

    public apuestaImpar():boolean{
        this.parImpar()
        let resultAleatorio = this.numbAleatorio()

        if(this.impar.indexOf(resultAleatorio) != -1){
            return true
        }else{
            return false
        }
    }

}