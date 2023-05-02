
const monedaUs = document.getElementById("monedasUs") as HTMLParagraphElement
const  inpMonedas = document.getElementById("apuesta") as HTMLInputElement
const botonesN = document.querySelectorAll(".tBtn")
const btnCheck = document.getElementById("btnCheck") as HTMLButtonElement
const resultado = document.getElementById("resultado") as HTMLElement
const giroRu =document.querySelector("#girar") as HTMLImageElement
const jugar = document.querySelector("#jugar") as HTMLButtonElement
const todosBtn = document.querySelector("#todosBtn") 
// cancelo estilo botones
botonesN.forEach( e => e.setAttribute("class","no") )

// test entrada dinero usuario
let inpMonedasV = Number(inpMonedas.value)
let platausuario:number = 3000
monedaUs.innerText = platausuario.toString()
/* validacion de apuesta */
btnCheck.addEventListener("click",()=>{
    
    let inpMonedasV = Number(inpMonedas.value)
    if(inpMonedasV < 30 /* apuesta minJuego*/){
        alert("tu apuesta es baja")
    }else if(inpMonedasV > platausuario ){
        alert("no tienes suficiente dinero")
    }else{
        if(platausuario >= 30 ){
             botonesN.forEach( e => e.setAttribute("class","tBtn") )
            let result =  platausuario -inpMonedasV
            console.log(result)
            monedaUs.innerText = result.toString()
        }else{
            alert("dinero insuficiente")
        }

    }
})


//  ------------- Desde la 41 hasta la 120 va en la clase ruleta
/* Funciones del juego  */
const rojo = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
const negro = [2,4,3,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
let verde = 0
let impar = []
let par = []
let numeros = rojo.concat(negro)
let aleatorio = 0

function numbAleatorio() { 
    aleatorio = Math.floor(Math.random()*36) 
}

function parImpar(){
for(let i = 1; i <= this.numeros.length; i++){
    if(i%2 == 0){
        this.par.push(i)
    }else{
        this.impar.push(i)
    }
}
}

function apuestaColorN():boolean{
    this.numbAleatorio()
    let result = this.negro.find(e => e == this.aleatorio)
    console.log(result)
    if(result === undefined){   
        return true
    }else{
      return false
    }
}  

function apuestaColorR():boolean{
    this.numbAleatorio()
    let result = this.rojo.find(e => e == this.aleatorio)
    
    if(result === undefined){
        return true
    }else{
       return false
    }
}  

function apuestaColorV():boolean{
 this.numbAleatorio()
if(this.verde !== aleatorio){
    return true
}else{
  return false
}
}

function apuestaPar():boolean{
this.parImpar()
this.numbAleatorio()
let result = this.par.find(e => e == aleatorio)

if(result === undefined){
    par = []
    return true
}else{
    par = []
  return false
}
}

function apuestaImpar():boolean{
this.parImpar()
this.numbAleatorio()
let result = this.impar.find(e => e == aleatorio)
if(result === undefined){
    impar = []
    return true
}else{
    impar = []
  return false
}
}


// girar imagen ruleta

function girar(){
   let stop = 0
   resultado.innerText ="Girando..."
   const intervalo = setInterval(()=>{
        let rand = Math.random()*7200;
        giroRu.style.transform = "rotate("+rand+"deg)"
        if(stop <= 30){
            botonesN.forEach( e => e.setAttribute("class","no") )
            stop++
        }else{
            botonesN.forEach( e => e.setAttribute("class","tBtn") )
            clearInterval(intervalo)
           
        }
    },100)
     
}


//validacion juego
const intervaloWin = ()=>{setTimeout(()=>{resultado.innerText = `salio el ${aleatorio} ganaste`},3300)}
const intervaloLose = ()=>{setTimeout(()=>{resultado.innerText = `salio el ${aleatorio} perdiste`},3300)}
const validJuego = (e)=>{
    girar()
    if(e === true){
      intervaloLose()
      return true    
    }else{
       intervaloWin()
       return false
    }
}
//funcionalidad del juego

todosBtn?.addEventListener("click",function(event){

    let apuesta = (<Element>event.target).id;

    switch(apuesta){
        case "negro" :
             validJuego(apuestaColorN())
             console.log(validJuego(apuestaColorN()))
             if(validJuego(apuestaColorN()) === true){
             }else{
                               //lo que se gana de la apuesta

             }
        break
        case "rojo" : 
             validJuego(apuestaColorR())

        break
        case "verde" : 
              validJuego(apuestaColorV())

        break
        case "par" :
              validJuego(apuestaPar())

        break
        case "impar" :
              validJuego(apuestaImpar())

        break
    }
    
})
