import * as rl from "readline-sync";

import { Casino } from "./casino";
import { Usuario } from "./usuario";
import { Ruleta } from "./ruleta";
import { Juegos } from "./juegos";
import { BlackJack } from "./blackJack";
import { TragaMonedas } from "./tragaMonedas";


const casinoLf:Casino = new Casino("Las Flores","Ruta 3")
const ruleta01 = new Ruleta("001",1,1)
const ruleta02 = new Ruleta("002",5,2)
const ruleta03 = new Ruleta("003",10,3)
casinoLf.setJuegos(ruleta01)
casinoLf.setJuegos(ruleta02)
casinoLf.setJuegos(ruleta03)
const tragaMonedas01 = new TragaMonedas("001",1,1)
const tragaMonedas02 = new TragaMonedas("002",5,2)
const tragaMonedas03 = new TragaMonedas("003",10,3)
casinoLf.setJuegos(tragaMonedas01)
casinoLf.setJuegos(tragaMonedas02)
casinoLf.setJuegos(tragaMonedas03)
const blackJack01 = new BlackJack("001",1,1)
const blackJack02 = new BlackJack("002",5,2)
const blackJack03 = new BlackJack("003",10,3)
casinoLf.setJuegos(blackJack01)
casinoLf.setJuegos(blackJack02)
casinoLf.setJuegos(blackJack03)

const logo = ()=> {return console.log(`
░░░░░░┼░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░┼░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░┼░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░╔═══╗░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░║╔═╗║░░░░░░░░░░░░┼░░░░░░░░░░░░░░
░░░░┼░░░║║░╚╬══╦══╦╦═╗╔══╗░┼░░░░░░░░░░░░
░░░░░░░░║║░╔╣╔╗║══╬╣╔╗╣╔╗║░░░░░░░░░░░░░░
░░░░░╔╦╦╣╚═╝║╔╗╠══║║║║║╚╝╠╦╦╗░░░░░░░░░░░
░░░░░╚╩╩╩═══╩╝╚╩══╩╩╝╚╩══╩╩╩╝░░░░░░░░░░░
░░░░░╔╗░░░░░░░░░░╔═╦╗░░┼░░░░░░░┼░░░░░░░░
░░░░░║║░░░░░┼░░░░║╔╣║░░░░░░░░░░░░░░░░░░░
░░░░░║║░░╔══╦══╗╔╝╚╣║╔══╦═╦══╦══╗░░░░░░░
░░░░░║║░╔╣╔╗║══╣╚╗╔╣║║╔╗║╔╣║═╣══╣░░░░░░░
░░░░░║╚═╝║╔╗╠══║░║║║╚╣╚╝║║║║═╬══║░░░░░░░
░┼░░░╚═══╩╝╚╩══╝░╚╝╚═╩══╩╝╚══╩══╝░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░┼░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
`)}
logo()
const name = rl.question(`Cual es tu nombre?\n`)

const age =parseInt( rl.question(`Cuantos anos tienes?\n`))

const usuario01:Usuario = new Usuario(name,age)
casinoLf.setUsuario(usuario01)
usuario01.confirmName(name)

//Menus de navegacion
const showMenu = ()=> console.log("\nA que juego quiere ingresar?\n\nr = Ruleta\nb = BlackJack\nt = Traga monedas\nc = Comprar fichas\ns = Salir")
const loserMenu = ()=>  console.log(`\nPerdiste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
const winMenu = () => console.log(`\nGanaste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)



// funciones de la ruleta
const apuestaRuletaColorV = function(usuario,juego,premio){
    const apuestaUs = parseInt(rl.question(`Ingresa tu apuesta\n`))
    if(apuestaUs === 0 || apuestaUs <= juego.getApuestaMin()) {
        console.log(`${usuario.getName()} tu apuesta es menor a ${juego.getApuestaMin()}`)
        console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)

    }else if(apuestaUs > usuario.getMonedas()){
        console.clear()
        console.log(`No tienes el dinero suficiente, lo siento.`)
        console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
    }else{
        console.clear()
        if(juego.apuestaColorV()=== true){
            console.clear()
            let win = apuestaUs * premio
            usuario.winMonedas(win)
            console.table(usuario.getInfoUsuario())
            winMenu()    
        }
        else{
            console.clear()
            let lose = apuestaUs 
            usuario.loseMonedas(lose)
            console.table(usuario.getInfoUsuario())
            loserMenu()    
        }
    }
}
const apuestaRuletaColorR = function(usuario,juegos,premio){
    const apuestaUs = parseInt(rl.question(`Ingresa tu apuesta\n`))
                        if(apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
                            console.log(`${usuario.getName()} tu apuesta es menor a ${juegos.getApuestaMin()}`)
                            console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)

                        }else if(apuestaUs > usuario.getMonedas()){
                            console.clear()
                            console.log(`No tienes el dinero suficiente, lo siento.`)
                            console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
                        }else{
                            console.clear()
                            if(juegos.apuestaColorR()=== true){
                                console.clear()
                                let win = apuestaUs * premio
                                usuario.winMonedas(win)
                                console.table(usuario.getInfoUsuario())
                                winMenu()    
                            }
                            else{
                                console.clear()
                                let lose = apuestaUs 
                                usuario.loseMonedas(lose)
                                console.table(usuario.getInfoUsuario())
                                loserMenu()    
                            }
                        }
}
const apuestaRuletaColorN = function(usuario,juegos,premio){
    const apuestaUs = parseInt(rl.question(`Ingresa tu apuesta\n`))
                        if(apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
                            console.log(`${usuario.getName()} tu apuesta es menor a ${juegos.getApuestaMin()}`)
                            console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)

                        }else if(apuestaUs > usuario.getMonedas()){
                            console.clear()
                            console.log(`No tienes el dinero suficiente, lo siento.`)
                            console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
                        }else{
                            console.clear()
                            if(juegos.apuestaColorN()=== true){
                                console.clear()
                                let win = apuestaUs * premio
                                usuario.winMonedas(win)
                                console.table(usuario.getInfoUsuario())
                                winMenu()    
                            }
                            else{
                                console.clear()
                                let lose = apuestaUs 
                                usuario.loseMonedas(lose)
                                console.table(usuario.getInfoUsuario())
                                loserMenu()    
                            }
                        }
}
const apuestaRuletaP = function(usuario,juegos,premio){
    const apuestaUs = parseInt(rl.question(`Ingresa tu apuesta\n`))
if(apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
    console.log(`${usuario.getName()} tu apuesta es menor a ${juegos.getApuestaMin()}`)
    console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)

}else if(apuestaUs > usuario.getMonedas()){
    console.clear()
    console.log(`No tienes el dinero suficiente, lo siento.`)
    console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
}else{
    console.clear()
    if(juegos.apuestaColorR()=== true){
        console.clear()
        let win = apuestaUs * premio
        usuario.winMonedas(win)
        console.table(usuario.getInfoUsuario())
        winMenu()    
    }
    else{
        console.clear()
        let lose = apuestaUs 
        usuario.loseMonedas(lose)
        console.table(usuario.getInfoUsuario())
        loserMenu()    
    }
} 
}
const apuestaRuletaI = function(usuario,juegos,premio){
    const apuestaUs = parseInt(rl.question(`Ingresa tu apuesta\n`))
if(apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
    console.log(`${usuario.getName()} tu apuesta es menor a ${juegos.getApuestaMin()}`)
    console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)

}else if(apuestaUs > usuario.getMonedas()){
    console.clear()
    console.log(`No tienes el dinero suficiente, lo siento.`)
    console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
}else{
    console.clear()
    if(juegos.apuestaColorR()=== true){
        console.clear()
        let win = apuestaUs * premio
        usuario.winMonedas(win)
        console.table(usuario.getInfoUsuario())
        winMenu()    
    }
    else{
        console.clear()
        let lose = apuestaUs 
        usuario.loseMonedas(lose)
        console.table(usuario.getInfoUsuario())
        loserMenu()    
    }
} 
}
// funciones de blackJack
const funcBlackJack = function(juegos, usuario, premio){
    console.clear()
    const us = usuario
    const premios = premio
    const apuestaUs = parseInt(rl.question(`Ingresa tu apuesta\n`))
if(apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
    console.log(`${us.getName()} tu apuesta es menor a la apuesta minima de ${juegos.getApuestaMin()}`)
    console.log(`\nEmpieza a jugar...\na = Apostar\ns = Salir`)

}else if(apuestaUs > us.getMonedas()){
    console.clear()
    console.log(`No tienes el dinero suficiente, lo siento.`)
    console.log(`\nEmpieza a jugar...\na = Apostar\ns = Salir`)
}else{
    console.clear()
    juegos.primMano()
    console.log("Quieres pedir otra carta?\no = Otra\nt = Terminar\ns = salir")

    rl.promptCLLoop({
        o:()=>{
            console.clear()
            juegos.validacionOtraCarta();
            console.log("Quieres pedir otra carta?\no = Otra\nt = Terminar\ns = salir")

        },
        t:()=>{
            console.clear()
            juegos.winLose(us,apuestaUs,premios)
            console.log("Presione \ns = Salir")
        },
        s:()=>{
            juegos.resetearMano()
            console.clear()
            console.log("Empieza a jugar...\na = Apostar\ns = Salir")
            return true
        }
    })
}
}
// funciones de traga monedas
const funtTragaMonedas = function(usuario,juegos){
    console.clear()
    const apuestaUs = parseInt(rl.question(`Ingresa tu apuesta\n`))
if(apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
    console.log(`${usuario.getName()} tu apuesta es menor a la apuesta minima de ${juegos.getApuestaMin()}`)
    console.log(`\nEmpieza a jugar...\na = Apostar\ns = Salir`)

}else if(apuestaUs > usuario.getMonedas()){
    console.clear()
    console.log(`No tienes el dinero suficiente, lo siento.`)
    console.log(`\nEmpieza a jugar...\na = Apostar\ns = Salir`)
}else{
    const result = juegos.apuestaTragaMonedas()
    console.log(result)
    if(result>0){
        let win = apuestaUs *result
        usuario.winMonedas(win)
        console.table(usuario.getInfoUsuario())
        console.log(`Ganaste...\nVolver a jugar...\na = Apostar\ns = Salir`)
    }else{
        usuario.loseMonedas(apuestaUs) 
        console.table(usuario.getInfoUsuario())    
        console.log(`Perdiste...\nVolver a jugar...\na = Apostar\ns = Salir`)
    }
}
}


if (usuario01.confirmAgre(age) === true){
    console.clear()
    console.log(`Bienvenido a `)
    logo()
    const monedaUs =parseInt( rl.question(`${name}¿Cuanto dinero queres cargar?\n`))
    usuario01.setMonedas(monedaUs)
    console.clear()
    console.log("Esta es tu targeta de Usuario")
    console.table(usuario01.getInfoUsuario())

    showMenu()
        rl.promptCLLoop({
        r:()=>{ 
            console.clear()
            console.log(`Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ${ruleta01.getMesa()}\nb = Mesa ${ruleta02.getMesa()}\nc = Mesa ${ruleta03.getMesa()}\ns = Salir\n`)
            rl.promptCLLoop({
               a:()=>{
                console.clear()
                console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
                rl.promptCLLoop({
                    r:()=>{
                        apuestaRuletaColorR(usuario01,ruleta01,2)                
                    },
                    n:()=>{
                        apuestaRuletaColorN(usuario01,ruleta01,2)
                    },
                    v:()=>{
                        apuestaRuletaColorV(usuario01,ruleta01,100)
                    },
                    p:()=>{
                        apuestaRuletaP(usuario01,ruleta01,5)
                    },
                    i:()=>{
                        apuestaRuletaI(usuario01,ruleta01,5)
                    },
                    s:()=>{
                        console.clear()
                        console.log(`Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ${ruleta01.getMesa()}\nb = Mesa ${ruleta02.getMesa()}\nc = Mesa ${ruleta03.getMesa()}\ns = Salir\n`)
                        return true
                    }
                })

                
               },
               b:()=>{
                console.clear()
                console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
                rl.promptCLLoop({
                    r:()=>{
                        apuestaRuletaColorR(usuario01,ruleta02,2)                
                    },
                    n:()=>{
                        apuestaRuletaColorN(usuario01,ruleta02,2)
                    },
                    v:()=>{
                        apuestaRuletaColorV(usuario01,ruleta02,100)
                    },
                    p:()=>{
                        apuestaRuletaP(usuario01,ruleta02,5)
                    },
                    i:()=>{
                        apuestaRuletaI(usuario01,ruleta02,5)
                    },
                    s:()=>{
                        console.clear()
                        console.log(`Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ${ruleta01.getMesa()}\nb = Mesa ${ruleta02.getMesa()}\nc = Mesa ${ruleta03.getMesa()}\ns = Salir\n`)
                        return true
                    }
                })
               },
               c:()=>{
                console.clear()
                console.log(`\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir`)
                rl.promptCLLoop({
                    r:()=>{
                        apuestaRuletaColorR(usuario01,ruleta03,2)                
                    },
                    n:()=>{
                        apuestaRuletaColorN(usuario01,ruleta03,2)
                    },
                    v:()=>{
                        apuestaRuletaColorV(usuario01,ruleta03,100)
                    },
                    p:()=>{
                        apuestaRuletaP(usuario01,ruleta03,5)
                    },
                    i:()=>{
                        apuestaRuletaI(usuario01,ruleta03,5)
                    },
                    s:()=>{
                        console.clear()
                        console.log(`Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ${ruleta01.getMesa()}\nb = Mesa ${ruleta02.getMesa()}\nc = Mesa ${ruleta03.getMesa()}\ns = Salir\n`)
                        return true
                    }
                })
               },
               s:()=>{
                    console.clear()
                    showMenu( )
                    return true
               } 
            })
        },
        
        b:()=>{
            console.clear()
            console.log(`Estas en la seccion de BlackJack\nA que mesa quiere ingresar?\n\na = Mesa ${blackJack01.getMesa()}\nb = Mesa ${blackJack02.getMesa()}\nc = Mesa ${blackJack03.getMesa()}\ns = Salir\n`)
            rl.promptCLLoop({
                a:()=>{    
                    console.clear()
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir")
                    rl.promptCLLoop({
                        a:()=>{
                        funcBlackJack(blackJack01,usuario01,3)
                        },
                        s:()=>{
                            console.clear()
                            showMenu( )
                            return true
                        }
                    })
                },
                b:()=>{
                    console.clear()
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir")
                    rl.promptCLLoop({
                        a:()=>{
                            funcBlackJack(blackJack02,usuario01,3)
                        },
                        s:()=>{
                                console.clear()
                                showMenu( )
                                return true
                        }
                    })
                },
                c:()=>{
                    console.clear()
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir")
                    rl.promptCLLoop({
                        a:()=>{
                            funcBlackJack(blackJack03,usuario01,3)
                        },
                        s:()=>{
                                console.clear()
                                showMenu( )
                                return true
                        }
                    })
                },
                s:()=>{
                    console.clear()
                    showMenu( )
                    return true
                }
            })
        },

        t:()=>{
            console.clear()
            console.log(`Estas en la seccion de Traga monedas\nA que mesa quiere ingresar?\n\na = Mesa ${tragaMonedas01.getMesa()}\nb = Mesa ${tragaMonedas02.getMesa()}\nc = Mesa ${tragaMonedas03.getMesa()}\ns = Salir\n`)
            rl.promptCLLoop({
                a:()=>{
                    console.clear()
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir")
                    rl.promptCLLoop({
                        a:()=>{
                            funtTragaMonedas(usuario01,tragaMonedas01)
                        },
                        s:()=>{
                            console.clear()
                            showMenu()
                            return true
                        }
                    })
                },
                b:()=>{
                    console.clear()
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir")
                    rl.promptCLLoop({
                        a:()=>{
                            funtTragaMonedas(usuario01,tragaMonedas02)
                        },
                        s:()=>{
                            console.clear()
                            showMenu()
                            return true
                        }
                    })
                },
                c:()=>{
                    console.clear()
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir")
                    rl.promptCLLoop({
                        a:()=>{
                            funtTragaMonedas(usuario01,tragaMonedas03)
                        },
                        s:()=>{
                            console.clear()
                            showMenu()
                            return true
                        }
                    })
                },
                s:()=>{
                    console.clear()
                    showMenu( )
                    return true
                }
            })
        },
        c:()=>{
            console.clear()
            console.log(`r = Recargar\ns = Salir`)
            rl.promptCLLoop({
                r:()=>{
                    console.clear()
                    const newSaldo = parseInt(rl.question("Cuanto desea recargar?\n"))
                    usuario01.winMonedas(newSaldo)
                    console.log("s = Salir")
                },
                s:()=>{
                    
                    console.clear()
                    console.table(usuario01)
                    showMenu()
                    return true 
                }
            })
        },
        s:()=>{
            console.clear()
            console.log(`${name}... Volve cuando quieras!`)
            return true
        }
    })
        
}

