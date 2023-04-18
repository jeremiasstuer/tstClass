export class Usuario{
    private name:string;
    private age:number;
    private monedas:number;

    public constructor(name:string,age:number){
        this.name=name
        this.age=age
        this.monedas=0
    }

    public getInfoUsuario():Usuario{
        return this
    }

    public getName():string{
        return this.name
    }

    public getMonedas():number{
        return this.monedas
    }
    public setMonedas(monedas:number):void{
        this.monedas=monedas
    }

    public winMonedas(monedas:number):void{
        this.monedas+= monedas
    }
    public loseMonedas(monedas:number):void{
        this.monedas-= monedas
    }

    public confirmName(name:string):void{
        if(!name){
            console.log("Tu nombre no es valido")
        }
    }
    public confirmAgre(age:number):boolean{
        if(!age || age < 18){
            console.warn("No tenes la edad suficiente para ingresar")
            return false;
        }else{
            return true
        }
        
    }
}