import { Usuario } from "./usuario";
import { Juegos } from "./juegos";

export class Casino {
    private usuario:Usuario[];
    private juegos:Juegos[];
    private fondo:number;
    private nombre:string;
    private direccion:string

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
        this.juegos.push(...this.juegos,newJuegos)
    }

}