export class Usuario{
    private name:string;
    private age:number;
    private monedas:number;
    private contraseña:string

    public constructor(name:string,age:number,contraseña:string){
        this.name=name
        this.age=age
        this.monedas=0
        this.contraseña=contraseña
    }

    public getInfoUsuario():Usuario{
        return this
    }

    public getName():void{
        const inertName =document.getElementById("userInert") as HTMLLIElement
         inertName.innerHTML = this.name
       
    }
    public getAge():number{
        return this.age
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

    public confirmName():boolean{
        
        if(this.name === ""){
            return true
        }else{
            return false
        }
    }
    public confirmAge():boolean{
        if(!this.age || this.age < 18){
           
            return true;
        }else{
            return false
        }
        
    }

    public confirmContraseña():boolean{
        if(this.contraseña === ""){
           
            return true;
        }else{
            return false
        }
        
    }
    
}