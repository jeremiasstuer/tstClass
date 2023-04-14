import { Juegos } from "./juegos";

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

    public apuestaColorN():void{
        let numbAleatorio = this.numbAleatorio()
        console.log(numbAleatorio)

        if(this.negro.indexOf(numbAleatorio) != -1){
            console.log(`\nGanaste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
        }else{
            console.log(`\nPerdiste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)  
        }
    }  

    public apuestaColorR():void{
        let numbAleatorio = this.numbAleatorio()
        console.log(numbAleatorio)

        if(this.rojo.indexOf(numbAleatorio) != -1){
            console.log(`\nGanaste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
        }else{
            console.log(`\nPerdiste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)  
        }
    }  

    public apuestaPar():void{
        this.parImpar
        let resultAleatorio = this.numbAleatorio()
        console.log(resultAleatorio)

       
        if(this.par.indexOf(resultAleatorio) != -1){
            console.log(`\nGanaste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
        }else{
            console.log(`\nPerdiste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
        }
    }

    public apuestaImpar():void{
        this.parImpar()
        let resultAleatorio = this.numbAleatorio()
       console.log(resultAleatorio)
        if(this.impar.indexOf(resultAleatorio) != -1){
            console.log(`\nGanaste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
        }else{
            console.log(`\nPerdiste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
        }
    }

}