import * as readLine from "readline-sync"

const numbAleatorio = ()=> { return 1+Math.floor(Math.random()*3)
}

readLine.promptCLLoop({
    a:()=>{
        let uno:number = numbAleatorio()
        let dos:number= numbAleatorio()
        let tres:number = numbAleatorio()
        console.log(uno,dos,tres)
        if(uno===dos && uno === tres){
            switch(uno){
                case 1: console.log("Ganaste 2 pesos")
                break;
                case 2: console.log("Ganaste 5 pesos")
                break;
                case 3: console.log("Ganaste 10 pesos")
                break;
            }
        }else{
            console.log("Perdiste")
        }
        
    },
    s:()=>{
         return true
    }
})