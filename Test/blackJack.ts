import * as readLine from "readline-sync"

// as = 1 u 11  ... valor de num segun las cartas
const apuestaMin:number = 30
let misCartas:number[]=[];
let CartasCru:number[]=[]
const numbAleatorio = function () {
    return 1 + Math.floor(Math.random() * 11);
};

const sumaArrat = function(e){
    let total = e.reduce((a, b) => a + b, 0);
    return total
}
const funcCru = function(){
    if(sumaArrat(CartasCru) <= 16){
        CartasCru.push(numbAleatorio())
    }
}
const winLose = function(mio, crupier){
    if(sumaArrat(mio)<=21 && sumaArrat(crupier) <= 21){
        if(sumaArrat(mio) > sumaArrat(crupier)){
            console.log(`Ganaste... Estos son tus puntos ${sumaArrat(mio)}`)
        }else{
            console.log(`Perdiste... Estos son tus puntos ${sumaArrat(mio)}`)
        }
    }else if(sumaArrat(mio)> 21){
        console.log(`Lo siento te pasas... Estos son tus puntos ${sumaArrat(mio)}`)
    }else if(sumaArrat(crupier)){
        console.log(`El crupier se paso... Estos son sus puntos ${sumaArrat(crupier)}`)
    }
}


console.log("Empieza a jugar...\na = Apostar\ns = Salir")


readLine.promptCLLoop({
    a:()=>{
        const apuesta=parseInt( readLine.question("Cuanto queres apostar?"));
        if(apuesta < apuestaMin){
            console.log("No superas la apuesta minima de la mesa...\na = Apostar\ns = Salir")
        }else{
            misCartas.push(numbAleatorio(),numbAleatorio())
            CartasCru.push(numbAleatorio(),numbAleatorio())
            console.log(`Mis cartas ${misCartas} \n La suma es ${sumaArrat(misCartas)}`  )
            sumaArrat(misCartas)
            console.log(`Cartas crupier ${CartasCru} \n La suma es ${sumaArrat(CartasCru)}`)
            sumaArrat(CartasCru)
            console.log("Quieres pedir otra carta?\no = Otra\nr = Terminar\ns = salir")
            readLine.promptCLLoop({
                o:()=>{
                    if(sumaArrat(misCartas)<= 21){
                    sumaArrat(misCartas)
                    misCartas.push(numbAleatorio())
                    console.log(`Mis cartas ${misCartas} \n La suma es ${sumaArrat(misCartas)}`  )

                    funcCru()
                    sumaArrat(CartasCru)
                    console.log(`Cartas crupier ${CartasCru} \n La suma es ${sumaArrat(CartasCru)}`)

                    console.log("Quieres pedir otra carta?\no = Otra\nm = Mostrar puntos\ns = salir")
                    }
                },
                r:()=>{
                    winLose(misCartas,CartasCru)
                    console.log("Presione \ns = Salir")
                },
                s:()=>{
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir")
                    misCartas=[]
                    CartasCru=[]
                    return true
                }
            })
        }
    },
    s:()=>{
        return true
    }
})

