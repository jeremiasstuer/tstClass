import { Usuario } from "./usuario";
import { Juegos } from "./juegos";
import { iCasino } from "./iCasino";

export class Casino implements iCasino {
    private usuario:Usuario[];
    public juegos:Juegos[];
     fondo:number;
     nombre:string;
     direccion:string

    public constructor(nombre:string,direccion:string){
        this.nombre = nombre;
        this.direccion = direccion;
        this.fondo = 1000000;
        this.usuario = [];
        this.juegos =[]
    }

    public getInfoCasino():Casino{
        return this
    }

    public getnombre():string{
        return this.nombre
    }
    public getDireccion():string{
        return this.direccion
    }
    
    public setUsuario(usuario:Usuario){
        this.usuario.push(usuario)
    }

    public getJuegos():Juegos[]{
        return this.juegos
    }

    public setJuegos(newJuegos:Juegos):void{
        this.juegos=[...this.juegos,newJuegos]
    }

    public getFondoC():number{
        return this.fondo
    }
    public setFondoC(fondo:number){
        this.fondo=fondo
    }

}