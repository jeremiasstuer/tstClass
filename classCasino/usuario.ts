export class Usuario{
    private name:string;
    private age:number;
    private monedas:number;

    public constructor(name:string,age:number,monedas:number){
        this.name=name
        this.age=age
        this.monedas=monedas
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
    
    public confirmName(name:string):void{
        if(!name){
            console.log("Tu nombre no es valido")
        }
    }
    public confirmAgre(age:number):void{
        if(!age || age < 18){
            console.log("No tenes la edad suficiente para ingresar")
        }else{

        }
    }
}