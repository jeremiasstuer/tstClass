import { Usuario } from "./usuario";

import * as readLine from "readline-sync";

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
const name = readLine.question(`Cual es tu nombre?\n`)

const age =parseInt( readLine.question(`Cuantos anos tienes?\n`))

const usu1 = new Usuario(name,age)

usu1.confirmName(name)
usu1.confirmAgre(age)

console.log(`Bienvenido ${name}`)

const showMenu = ()=>console.log(`¿Que queres jugar?\nr = Ruleta\nt = Traga monedas\np = Pocker\ns = Salir`)
showMenu()

readLine.promptCLLoop({
    r:()=>{
        console.log(`a = Apuesta\nj=Jugar\ns=salir`)
        readLine.promptCLLoop({
            a:()=>{
                console.log("apostaste")
            },
            j:()=>{
                console.log("Jugando")
            },
            s:()=>{
                showMenu()
                return true
            }
        })
    },

    t:()=>{
        console.log(`a = Apuesta\nj=Jugar\ns=salir`)
        readLine.promptCLLoop({
            a:()=>{
                console.log("apostaste")
            },
            j:()=>{
                console.log("Jugando")
            },
            s:()=>{
                showMenu()
                return true
            }
        })
    },
    p:()=>{
        console.log(`a = Apuesta\nj=Jugar\ns=salir`)
        readLine.promptCLLoop({
            a:()=>{
                console.log("apostaste")
            },
            j:()=>{
                console.log("Jugando")
            },
            s:()=>{
                showMenu()
                return true
            }
        })
    },
    s:()=>{
        return true
    }
})

