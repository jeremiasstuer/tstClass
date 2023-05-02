var monedaUs = document.getElementById("monedasUs");
var inpMonedas = document.getElementById("apuesta");
var botonesN = document.querySelectorAll(".tBtn");
var btnCheck = document.getElementById("btnCheck");
var resultado = document.getElementById("resultado");
var giroRu = document.querySelector("#girar");
var jugar = document.querySelector("#jugar");
var todosBtn = document.querySelector("#todosBtn");
// cancelo estilo botones
botonesN.forEach(function (e) { return e.setAttribute("class", "no"); });
// test entrada dinero usuario
var inpMonedasV = Number(inpMonedas.value);
var platausuario = 3000;
monedaUs.innerText = platausuario.toString();
/* validacion de apuesta */
btnCheck.addEventListener("click", function () {
    var inpMonedasV = Number(inpMonedas.value);
    if (inpMonedasV < 30 /* apuesta minJuego*/) {
        alert("tu apuesta es baja");
    }
    else if (inpMonedasV > platausuario) {
        alert("no tienes suficiente dinero");
    }
    else {
        if (platausuario >= 30) {
            botonesN.forEach(function (e) { return e.setAttribute("class", "tBtn"); });
            var result = platausuario - inpMonedasV;
            console.log(result);
            monedaUs.innerText = result.toString();
        }
        else {
            alert("dinero insuficiente");
        }
    }
});
/* Funciones del juego */
var rojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var negro = [2, 4, 3, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
var verde = 0;
var impar = [];
var par = [];
var numeros = rojo.concat(negro);
var aleatorio = 0;
function numbAleatorio() {
    aleatorio = Math.floor(Math.random() * 36);
}
function parImpar() {
    for (var i = 1; i <= this.numeros.length; i++) {
        if (i % 2 == 0) {
            this.par.push(i);
        }
        else {
            this.impar.push(i);
        }
    }
}
function apuestaColorN() {
    var _this = this;
    this.numbAleatorio();
    var result = this.negro.find(function (e) { return e == _this.aleatorio; });
    console.log(result);
    if (result === undefined) {
        return true;
    }
    else {
        return false;
    }
}
function apuestaColorR() {
    var _this = this;
    this.numbAleatorio();
    var result = this.rojo.find(function (e) { return e == _this.aleatorio; });
    if (result === undefined) {
        return true;
    }
    else {
        return false;
    }
}
function apuestaColorV() {
    this.numbAleatorio();
    if (this.verde !== aleatorio) {
        return true;
    }
    else {
        return false;
    }
}
function apuestaPar() {
    this.parImpar();
    this.numbAleatorio();
    var result = this.par.find(function (e) { return e == aleatorio; });
    if (result === undefined) {
        par = [];
        return true;
    }
    else {
        par = [];
        return false;
    }
}
function apuestaImpar() {
    this.parImpar();
    this.numbAleatorio();
    var result = this.impar.find(function (e) { return e == aleatorio; });
    if (result === undefined) {
        impar = [];
        return true;
    }
    else {
        impar = [];
        return false;
    }
}
// girar imagen ruleta
function girar() {
    var stop = 0;
    resultado.innerText = "Girando...";
    var intervalo = setInterval(function () {
        var rand = Math.random() * 7200;
        giroRu.style.transform = "rotate(" + rand + "deg)";
        if (stop <= 30) {
            botonesN.forEach(function (e) { return e.setAttribute("class", "no"); });
            stop++;
        }
        else {
            botonesN.forEach(function (e) { return e.setAttribute("class", "tBtn"); });
            clearInterval(intervalo);
        }
    }, 100);
}
//validacion juego
var intervaloWin = function () { setTimeout(function () { resultado.innerText = "salio el ".concat(aleatorio, " ganaste"); }, 3300); };
var intervaloLose = function () { setTimeout(function () { resultado.innerText = "salio el ".concat(aleatorio, " perdiste"); }, 3300); };
var validJuego = function (e) {
    girar();
    if (e === true) {
        intervaloLose();
        return true;
    }
    else {
        intervaloWin();
        return false;
    }
};
//funcionalidad del juego
todosBtn === null || todosBtn === void 0 ? void 0 : todosBtn.addEventListener("click", function (event) {
    var apuesta = event.target.id;
    switch (apuesta) {
        case "negro":
            validJuego(apuestaColorN());
            console.log(validJuego(apuestaColorN()));
            if (validJuego(apuestaColorN()) === true) {
            }
            else {
                //lo que se gana de la apuesta
            }
            break;
        case "rojo":
            validJuego(apuestaColorR());
            break;
        case "verde":
            validJuego(apuestaColorV());
            break;
        case "par":
            validJuego(apuestaPar());
            break;
        case "impar":
            validJuego(apuestaImpar());
            break;
    }
});
