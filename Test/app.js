"use strict";
exports.__esModule = true;
var usuario_1 = require("./usuario");
var readLine = require("readline-sync");
console.log("\n            \n\u2554\u2550\u2550\u2550\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2551\u2554\u2550\u2557\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2551\u2551\u2591\u255A\u256C\u2550\u2550\u2566\u2550\u2550\u2566\u2566\u2550\u2557\u2554\u2550\u2550\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2551\u2551\u2591\u2554\u2563\u2554\u2557\u2551\u2550\u2550\u256C\u2563\u2554\u2557\u2563\u2554\u2557\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2551\u255A\u2550\u255D\u2551\u2554\u2557\u2560\u2550\u2550\u2551\u2551\u2551\u2551\u2551\u255A\u255D\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u255A\u2550\u2550\u2550\u2569\u255D\u255A\u2569\u2550\u2550\u2569\u2569\u255D\u255A\u2569\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2554\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2554\u2550\u2550\u2550\u2566\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2551\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2551\u2554\u2550\u2550\u2563\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2551\u2551\u2591\u2591\u2554\u2550\u2550\u2566\u2550\u2550\u2557\u2551\u255A\u2550\u2550\u2563\u2551\u2554\u2550\u2550\u2566\u2550\u2566\u2550\u2550\u2566\u2550\u2550\u2557\n\u2551\u2551\u2591\u2554\u2563\u2554\u2557\u2551\u2550\u2550\u2563\u2551\u2554\u2550\u2550\u2563\u2551\u2551\u2554\u2557\u2551\u2554\u2563\u2551\u2550\u2563\u2550\u2550\u2563\n\u2551\u255A\u2550\u255D\u2551\u2554\u2557\u2560\u2550\u2550\u2551\u2551\u2551\u2591\u2591\u2551\u255A\u2563\u255A\u255D\u2551\u2551\u2551\u2551\u2550\u256C\u2550\u2550\u2551\n\u255A\u2550\u2550\u2550\u2569\u255D\u255A\u2569\u2550\u2550\u255D\u255A\u255D\u2591\u2591\u255A\u2550\u2569\u2550\u2550\u2569\u255D\u255A\u2550\u2550\u2569\u2550\u2550\u255D\n");
var name = readLine.question("Cual es tu nombre?\n");
var age = parseInt(readLine.question("Cuantos anos tienes?\n"));
var usu1 = new usuario_1.Usuario(name, age);
usu1.confirmName(name);
usu1.confirmAgre(age);
console.log("Bienvenido ".concat(name));
var showMenu = function () { return console.log("\u00BFQue queres jugar?\nr = Ruleta\nt = Traga monedas\np = Pocker\ns = Salir"); };
showMenu();
readLine.promptCLLoop({
    r: function () {
        console.log("a = Apuesta\nj=Jugar\ns=salir");
        readLine.promptCLLoop({
            a: function () {
                console.log("apostaste");
            },
            j: function () {
                console.log("Jugando");
            },
            s: function () {
                showMenu();
                return true;
            }
        });
    },
    t: function () {
        console.log("a = Apuesta\nj=Jugar\ns=salir");
        readLine.promptCLLoop({
            a: function () {
                console.log("apostaste");
            },
            j: function () {
                console.log("Jugando");
            },
            s: function () {
                showMenu();
                return true;
            }
        });
    },
    p: function () {
        console.log("a = Apuesta\nj=Jugar\ns=salir");
        readLine.promptCLLoop({
            a: function () {
                console.log("apostaste");
            },
            j: function () {
                console.log("Jugando");
            },
            s: function () {
                showMenu();
                return true;
            }
        });
    },
    s: function () {
        return true;
    }
});
