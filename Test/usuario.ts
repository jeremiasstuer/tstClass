export class Usuario{
    private name:string
    private age:number

    public constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

    public getName():string{
        return this.name
    }
    
    public getAge():number{
        return this.age
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
            console.log(`
            
            ╔═══╗░░░░░░░░░░░░░░░░░░░░░░░░
            ║╔═╗║░░░░░░░░░░░░░░░░░░░░░░░░
            ║║░╚╬══╦══╦╦═╗╔══╗░░░░░░░░░░░
            ║║░╔╣╔╗║══╬╣╔╗╣╔╗║░░░░░░░░░░░
            ║╚═╝║╔╗╠══║║║║║╚╝║░░░░░░░░░░░
            ╚═══╩╝╚╩══╩╩╝╚╩══╝░░░░░░░░░░░
            ╔╗░░░░░░░░░╔═══╦╗░░░░░░░░░░░░
            ║║░░░░░░░░░║╔══╣║░░░░░░░░░░░░
            ║║░░╔══╦══╗║╚══╣║╔══╦═╦══╦══╗
            ║║░╔╣╔╗║══╣║╔══╣║║╔╗║╔╣║═╣══╣
            ║╚═╝║╔╗╠══║║║░░║╚╣╚╝║║║║═╬══║
            ╚═══╩╝╚╩══╝╚╝░░╚═╩══╩╝╚══╩══╝
            `)
        }
    }
}