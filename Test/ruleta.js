"use strict";
exports.__esModule = true;
var readLine = require("readline-sync");
var rojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var negro = [2, 4, 3, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
var verde = 0;
var numbAleatorio = function () {
    return Math.floor(Math.random() * 36);
};
var apuesta = parseInt(readLine.question("Cuanto quieres apostar?"));
var showMenu = function () { return console.log("\nApostale a algun color\nr= Rojo\nn= Negro\nv= Verde\ns=Salir"); };
var loserMenu = function () { return console.log("\nPerdiste...\u00BFQuieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir"); };
var winMenu = function () { return console.log("\nGanaste...\u00BFQuieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\ns=Salir"); };
showMenu();
readLine.promptCLLoop({
    r: function () {
        var resultAleatorio = numbAleatorio();
        console.log("".concat(resultAleatorio, "\n").concat(rojo));
        if (rojo.indexOf(resultAleatorio) != -1) {
            console.log("Ganaste");
            winMenu();
        }
        else {
            loserMenu();
        }
        /*
        while (idx != -1){
            console.log("Ganaste" )
            winMenu()
            break;
        }
        loserMenu()*/
    },
    n: function () {
    },
    v: function () {
    },
    s: function () {
        return true;
    }
});
