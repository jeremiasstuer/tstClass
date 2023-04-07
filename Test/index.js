let readLine = require("readline-sync")

let name = readLine.question("Cual es tu nombre?")

if(!name){
    console.warn("lo siento ingresa un nombre nuevamente")
    return;
}

let age = readLine.questionInt("Cual es tu edad?")

if(age <18){
    console.warn("usted no puede ingresar al casino?")
    return;
}



if(!readLine.keyInYN(`${name}, vamos a iniciar tu pedido`)){
    console.log("bye")
    return;
}

let productos = ["pan","pizza","carne cocida","churrazco"]

let showMenu = ()=>console.log(`\nElija estas opciones:\na= Agregar \nr = Remover \nm = mostrar pedido \nf = finalizar pedido`)
let shoppingCart = () =>{
    if(shoppingCartItems.length == 0){
        console.log("su carro esta vacio!")
        return;
    }
    console.table(shoppingCartItems)
    console.log("")
}
showMenu();

let shoppingCartItems=[]

readLine.promptCLLoop({
    a:()=>{
        let i= readLine.keyInSelect(productos,"Que quiere agregar?")
        while(i>=0){
            let name = productos[i]
            let item = shoppingCartItems.find(i=> i.name == name);
            if(!item){
                item = { name, cantidad:0}
                shoppingCartItems.push(item)
            }
            item.cantidad++;
            i=readLine.keyInSelect(productos,`${item.cantidad} ${item.name} quiere algo mas?`)
        }
        showMenu()
    },
    r:()=>{
        let i= readLine.keyInSelect(productos,"Que quiere remover?")
        while(i>=0){
            let name = productos[i]
            let item = shoppingCartItems.find(i=> i.name == name);
        if(!item || item.cantidad == 0){
            i= readLine.keyInSelect(productos,`${name} no se encuentra en el pedido!, Quiere remover algo mas?`)
        }else{
            item.cantidad--
            i=readLine.keyInSelect(productos,`${item.cantidad || `no queda mas`} ${item.name} quiere remover algo mas?`)
        }
        showMenu()
    }},
    m:()=>{
        shoppingCart()
        showMenu()
    },
    f:()=>{
        if(shoppingCartItems.length > 0){
            if(readLine.keyInYN(`Confirme su pedido ${name}`)){
                readLine.question("ingrese su contraseña",{
                    hideEchoBack:true,
                    mask:"-"
                })
                shoppingCart()
            }
            console.log("bye")
            return true;
        }
    }
});