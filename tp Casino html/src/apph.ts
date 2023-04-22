import { Casino } from "./clases/casino.js";
import { Usuario } from "./clases/usuario.js";
import { Ruleta } from "./clases/ruleta.js";
import { BlackJack } from "./clases/blackJack.js";
import { TragaMonedas } from "./clases/tragaMonedas.js";
import { Juegos } from "./clases/juegos.js";
import { iCasino } from "./clases/iCasino.js";

const formulario = document.getElementById("formulario") as HTMLFormElement
const userName = document.getElementById("usuario") as HTMLInputElement
const userEdad = document.getElementById("edad") as HTMLInputElement
const userContraseña = document.getElementById("contraseña") as HTMLInputElement


formulario?.addEventListener("submit", e =>{
    e.preventDefault();
    const userEdadV =Number(parseInt(userEdad.value))

    const usuario01 = new Usuario(userName.value, userEdadV,userContraseña.value)
    if(usuario01.confirmName()){
        document.getElementById("img2")?.classList.add("validTrue")
        return
    }else{
        document.getElementById("img2")?.classList.remove("validTrue")
        document.getElementById("img1")?.classList.add("validTrue")
    }

    if(usuario01.confirmAge()){
        document.getElementById("img4")?.classList.add("validTrue")
        return
    }else{
        document.getElementById("img4")?.classList.remove("validTrue")
        document.getElementById("img3")?.classList.add("validTrue")
        
    }
    if(usuario01.confirmContraseña()){
        document.getElementById("img6")?.classList.add("validTrue")
        return
    }else{
        document.getElementById("img6")?.classList.remove("validTrue")
        document.getElementById("img5")?.classList.add("validTrue")
        
    }
    
    if(usuario01.confirmName() === false && usuario01.confirmAge() === false && usuario01.confirmContraseña() === false){
        window.location.replace('./html/pUsuario.html'); 
       
    }
})
