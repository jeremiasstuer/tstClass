"use strict";
exports.__esModule = true;
var readLine = require("readline-sync");
var rojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var negro = [2, 4, 3, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
var verde = 0;
var par = [];
var impar = [];
var todosLosNumeros = rojo.concat(negro);
/*funciones */
var numbAleatorio = function () {
    return Math.floor(Math.random() * 36);
};
function parImpar() {
    for (var i = 1; i <= todosLosNumeros.length; i++) {
        if (i % 2 == 0) {
            par.push(i);
        }
        else {
            impar.push(i);
        }
    }
}
parImpar();
var apuesta = parseInt(readLine.question("Cuanto quieres apostar?"));
/*Todos los menu */
var showMenu = function () { return console.log("\nApostale a algun color\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir"); };
var loserMenu = function () { return console.log("\nPerdiste...\u00BFQuieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir"); };
var winMenu = function () { return console.log("\nGanaste...\u00BFQuieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir"); };
showMenu();
readLine.promptCLLoop({
    r: function () {
        var resultAleatorio = numbAleatorio();
        if (rojo.indexOf(resultAleatorio) != -1) {
            winMenu();
        }
        else {
            loserMenu();
        }
    },
    n: function () {
        var resultAleatorio = numbAleatorio();
        if (negro.indexOf(resultAleatorio) != -1) {
            winMenu();
        }
        else {
            loserMenu();
        }
    },
    v: function () {
        var resultAleatorio = numbAleatorio();
        if (verde === resultAleatorio) {
            winMenu();
        }
        else {
            loserMenu();
        }
    },
    p: function () {
        var resultAleatorio = numbAleatorio();
        if (par.indexOf(resultAleatorio) != -1) {
            winMenu();
        }
        else {
            loserMenu();
        }
    },
    i: function () {
        var resultAleatorio = numbAleatorio();
        if (impar.indexOf(resultAleatorio) != -1) {
            winMenu();
        }
        else {
            loserMenu();
        }
    },
    s: function () {
        return true;
    }
});
