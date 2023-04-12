"use strict";
exports.__esModule = true;
var readLine = require("readline-sync");
// as = 1 u 11  ... valor de num segun las cartas
var apuestaMin = 30;
var misCartas = [];
var CartasCru = [];
var numbAleatorio = function () {
    return 1 + Math.floor(Math.random() * 11);
};
var sumaArrat = function (e) {
    var total = e.reduce(function (a, b) { return a + b; }, 0);
    return total;
};
var funcCru = function () {
    if (sumaArrat(CartasCru) <= 16) {
        CartasCru.push(numbAleatorio());
    }
};
var winLose = function (mio, crupier) {
    if (sumaArrat(mio) <= 21 && sumaArrat(crupier) <= 21) {
        if (sumaArrat(mio) > sumaArrat(crupier)) {
            console.log("Ganaste... Estos son tus puntos ".concat(sumaArrat(mio)));
        }
        else {
            console.log("Perdiste... Estos son tus puntos ".concat(sumaArrat(mio)));
        }
    }
    else if (sumaArrat(mio) > 21) {
        console.log("Lo siento te pasas... Estos son tus puntos ".concat(sumaArrat(mio)));
    }
    else if (sumaArrat(crupier)) {
        console.log("El crupier se paso... Estos son sus puntos ".concat(sumaArrat(crupier)));
    }
};
console.log("Empieza a jugar...\na = Apostar\ns = Salir");
readLine.promptCLLoop({
    a: function () {
        var apuesta = parseInt(readLine.question("Cuanto queres apostar?"));
        if (apuesta < apuestaMin) {
            console.log("No superas la apuesta minima de la mesa...\na = Apostar\ns = Salir");
        }
        else {
            misCartas.push(numbAleatorio(), numbAleatorio());
            CartasCru.push(numbAleatorio(), numbAleatorio());
            console.log("Mis cartas ".concat(misCartas, " \n La suma es ").concat(sumaArrat(misCartas)));
            sumaArrat(misCartas);
            console.log("Cartas crupier ".concat(CartasCru, " \n La suma es ").concat(sumaArrat(CartasCru)));
            sumaArrat(CartasCru);
            console.log("Quieres pedir otra carta?\no = Otra\nr = Terminar\ns = salir");
            readLine.promptCLLoop({
                o: function () {
                    if (sumaArrat(misCartas) <= 21) {
                        sumaArrat(misCartas);
                        misCartas.push(numbAleatorio());
                        console.log("Mis cartas ".concat(misCartas, " \n La suma es ").concat(sumaArrat(misCartas)));
                        funcCru();
                        sumaArrat(CartasCru);
                        console.log("Cartas crupier ".concat(CartasCru, " \n La suma es ").concat(sumaArrat(CartasCru)));
                        console.log("Quieres pedir otra carta?\no = Otra\nm = Mostrar puntos\ns = salir");
                    }
                },
                r: function () {
                    winLose(misCartas, CartasCru);
                    console.log("Presione \ns = Salir");
                },
                s: function () {
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                    misCartas = [];
                    CartasCru = [];
                    return true;
                }
            });
        }
    },
    s: function () {
        return true;
    }
});
