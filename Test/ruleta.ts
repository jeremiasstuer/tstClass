import * as readLine from "readline-sync";


const rojo = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
const negro = [2,4,3,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
const verde = 0


const numbAleatorio = ()=> { return Math.floor(Math.random()*36)
}



const apuesta = parseInt(readLine.question("Cuanto quieres apostar?"))

const showMenu = ()=> console.log(`\nApostale a algun color\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
const loserMenu = ()=>  console.log(`\nPerdiste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
const winMenu = () => console.log(`\nGanaste...¿Quieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir`)
showMenu()

readLine.promptCLLoop({
    r:()=>{
        let resultAleatorio = numbAleatorio()
       
        if(rojo.indexOf(resultAleatorio) != -1){
            winMenu()
        }else{
            loserMenu()
        }

    },
    n:()=>{
        let resultAleatorio = numbAleatorio()
       
        if(negro.indexOf(resultAleatorio) != -1){
            winMenu()
        }else{
            loserMenu()
        }
    },
    v:()=>{
        let resultAleatorio = numbAleatorio()
        if(verde === resultAleatorio){
            winMenu()
        }else{
            loserMenu()
        }
    },
    s:()=>{
        return true
    }
    
})