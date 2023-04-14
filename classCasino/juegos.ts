
export class Juegos{
    protected nombre: string;
    protected mesa: number;
    protected apuestaMin: number;

    constructor(nombre:string,mesa:number,apuestaMin:number){
      this.nombre=nombre
      this.mesa=mesa
      this.apuestaMin=apuestaMin
    }

    public getNombre():string{
        return this.nombre
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre
    }

    public getApuestaMin():number{
        return this.apuestaMin
    }
    public setApuestaMin(apuestaMin:number):void{
        this.apuestaMin=apuestaMin
    }

    numbAleatorio() {
        
    }

}