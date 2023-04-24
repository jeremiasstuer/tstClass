"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var casino_1 = require("./casino");
var usuario_1 = require("./usuario");
var ruleta_1 = require("./ruleta");
var blackJack_1 = require("./blackJack");
var tragaMonedas_1 = require("./tragaMonedas");
var tragamonedasFrutas_1 = require("./tragamonedasFrutas");
var tragaMonedasIconos_1 = require("./tragaMonedasIconos");
var casinoLf = new casino_1.Casino("Las Flores", "Ruta 3");
var ruleta01 = new ruleta_1.Ruleta("001", 1, 1);
var ruleta02 = new ruleta_1.Ruleta("002", 5, 2);
var ruleta03 = new ruleta_1.Ruleta("003", 10, 3);
casinoLf.setJuegos(ruleta01);
casinoLf.setJuegos(ruleta02);
casinoLf.setJuegos(ruleta03);
var tragaMonedas01 = new tragaMonedas_1.TragaMonedas("001", 1, 1);
var tragaMonedas02 = new tragamonedasFrutas_1.TragaMonedasFruta("002", 5, 2);
var tragaMonedas03 = new tragaMonedasIconos_1.TragaMonedasIconos("003", 10, 3);
casinoLf.setJuegos(tragaMonedas01);
casinoLf.setJuegos(tragaMonedas02);
casinoLf.setJuegos(tragaMonedas03);
var blackJack01 = new blackJack_1.BlackJack("001", 1, 1);
var blackJack02 = new blackJack_1.BlackJack("002", 5, 2);
var blackJack03 = new blackJack_1.BlackJack("003", 10, 3);
casinoLf.setJuegos(blackJack01);
casinoLf.setJuegos(blackJack02);
casinoLf.setJuegos(blackJack03);
var logo = function () {
    return console.log("\n\u2591\u2591\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2554\u2550\u2550\u2550\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2551\u2554\u2550\u2557\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2551\u2551\u2591\u255A\u256C\u2550\u2550\u2566\u2550\u2550\u2566\u2566\u2550\u2557\u2554\u2550\u2550\u2557\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2551\u2551\u2591\u2554\u2563\u2554\u2557\u2551\u2550\u2550\u256C\u2563\u2554\u2557\u2563\u2554\u2557\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2554\u2566\u2566\u2563\u255A\u2550\u255D\u2551\u2554\u2557\u2560\u2550\u2550\u2551\u2551\u2551\u2551\u2551\u255A\u255D\u2560\u2566\u2566\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u255A\u2569\u2569\u2569\u2550\u2550\u2550\u2569\u255D\u255A\u2569\u2550\u2550\u2569\u2569\u255D\u255A\u2569\u2550\u2550\u2569\u2569\u2569\u255D\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2554\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2554\u2550\u2566\u2557\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2551\u2551\u2591\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2551\u2554\u2563\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2551\u2551\u2591\u2591\u2554\u2550\u2550\u2566\u2550\u2550\u2557\u2554\u255D\u255A\u2563\u2551\u2554\u2550\u2550\u2566\u2550\u2566\u2550\u2550\u2566\u2550\u2550\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2551\u2551\u2591\u2554\u2563\u2554\u2557\u2551\u2550\u2550\u2563\u255A\u2557\u2554\u2563\u2551\u2551\u2554\u2557\u2551\u2554\u2563\u2551\u2550\u2563\u2550\u2550\u2563\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2551\u255A\u2550\u255D\u2551\u2554\u2557\u2560\u2550\u2550\u2551\u2591\u2551\u2551\u2551\u255A\u2563\u255A\u255D\u2551\u2551\u2551\u2551\u2550\u256C\u2550\u2550\u2551\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u253C\u2591\u2591\u2591\u255A\u2550\u2550\u2550\u2569\u255D\u255A\u2569\u2550\u2550\u255D\u2591\u255A\u255D\u255A\u2550\u2569\u2550\u2550\u2569\u255D\u255A\u2550\u2550\u2569\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u253C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\n");
};
logo();
var name = rl.question("Cual es tu nombre?\n");
var age = parseInt(rl.question("Cuantos anos tienes?\n"));
var usuario01 = new usuario_1.Usuario(name, age);
casinoLf.setUsuario(usuario01);
usuario01.confirmName(name);
//Menus de navegacion
var showMenu = function () { return console.log("\nA que juego quiere ingresar?\n\nr = Ruleta\nb = BlackJack\nt = Traga monedas\nc = Comprar fichas\ns = Salir"); };
var loserMenu = function () { return console.log("\nPerdiste...\u00BFQuieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir"); };
var winMenu = function () { return console.log("\nGanaste...\u00BFQuieres apostar otra vez?\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir"); };
var showMesas = function () { return console.log("Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ".concat(ruleta01.getMesa(), "\nb = Mesa ").concat(ruleta02.getMesa(), "\nc = Mesa ").concat(ruleta03.getMesa(), "\ns = Salir\n")); };
// funciones de la ruleta
var apuestaRuletaColorV = function (usuario, juego, premio) {
    var apuestaUs = parseInt(rl.question("Ingresa tu apuesta\n"));
    if (apuestaUs === 0 || apuestaUs <= juego.getApuestaMin()) {
        console.log("".concat(usuario.getName(), " tu apuesta es menor a ").concat(juego.getApuestaMin()));
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else if (apuestaUs > usuario.getMonedas()) {
        console.clear();
        console.log("No tienes el dinero suficiente, lo siento.");
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else {
        console.clear();
        if (juego.apuestaColorV() === true) {
            console.clear();
            var win = apuestaUs * premio;
            usuario.winMonedas(win);
            console.table(usuario.getInfoUsuario());
            winMenu();
        }
        else {
            console.clear();
            var lose = apuestaUs;
            usuario.loseMonedas(lose);
            console.table(usuario.getInfoUsuario());
            loserMenu();
        }
    }
};
var apuestaRuletaColorR = function (usuario, juegos, premio) {
    var apuestaUs = parseInt(rl.question("Ingresa tu apuesta\n"));
    if (apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
        console.log("".concat(usuario.getName(), " tu apuesta es menor a ").concat(juegos.getApuestaMin()));
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else if (apuestaUs > usuario.getMonedas()) {
        console.clear();
        console.log("No tienes el dinero suficiente, lo siento.");
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else {
        console.clear();
        if (juegos.apuestaColorR() === true) {
            console.clear();
            var win = apuestaUs * premio;
            usuario.winMonedas(win);
            console.table(usuario.getInfoUsuario());
            winMenu();
        }
        else {
            console.clear();
            var lose = apuestaUs;
            usuario.loseMonedas(lose);
            console.table(usuario.getInfoUsuario());
            loserMenu();
        }
    }
};
var apuestaRuletaColorN = function (usuario, juegos, premio) {
    var apuestaUs = parseInt(rl.question("Ingresa tu apuesta\n"));
    if (apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
        console.log("".concat(usuario.getName(), " tu apuesta es menor a ").concat(juegos.getApuestaMin()));
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else if (apuestaUs > usuario.getMonedas()) {
        console.clear();
        console.log("No tienes el dinero suficiente, lo siento.");
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else {
        console.clear();
        if (juegos.apuestaColorN() === true) {
            console.clear();
            var win = apuestaUs * premio;
            usuario.winMonedas(win);
            console.table(usuario.getInfoUsuario());
            winMenu();
        }
        else {
            console.clear();
            var lose = apuestaUs;
            usuario.loseMonedas(lose);
            console.table(usuario.getInfoUsuario());
            loserMenu();
        }
    }
};
var apuestaRuletaP = function (usuario, juegos, premio) {
    var apuestaUs = parseInt(rl.question("Ingresa tu apuesta\n"));
    if (apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
        console.log("".concat(usuario.getName(), " tu apuesta es menor a ").concat(juegos.getApuestaMin()));
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else if (apuestaUs > usuario.getMonedas()) {
        console.clear();
        console.log("No tienes el dinero suficiente, lo siento.");
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else {
        console.clear();
        if (juegos.apuestaColorR() === true) {
            console.clear();
            var win = apuestaUs * premio;
            usuario.winMonedas(win);
            console.table(usuario.getInfoUsuario());
            winMenu();
        }
        else {
            console.clear();
            var lose = apuestaUs;
            usuario.loseMonedas(lose);
            console.table(usuario.getInfoUsuario());
            loserMenu();
        }
    }
};
var apuestaRuletaI = function (usuario, juegos, premio) {
    var apuestaUs = parseInt(rl.question("Ingresa tu apuesta\n"));
    if (apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
        console.log("".concat(usuario.getName(), " tu apuesta es menor a ").concat(juegos.getApuestaMin()));
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else if (apuestaUs > usuario.getMonedas()) {
        console.clear();
        console.log("No tienes el dinero suficiente, lo siento.");
        console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
    }
    else {
        console.clear();
        if (juegos.apuestaColorR() === true) {
            console.clear();
            var win = apuestaUs * premio;
            usuario.winMonedas(win);
            console.table(usuario.getInfoUsuario());
            winMenu();
        }
        else {
            console.clear();
            var lose = apuestaUs;
            usuario.loseMonedas(lose);
            console.table(usuario.getInfoUsuario());
            loserMenu();
        }
    }
};
// funciones de blackJack
var funcBlackJack = function (juegos, usuario, premio) {
    console.clear();
    var us = usuario;
    var premios = premio;
    var apuestaUs = parseInt(rl.question("Ingresa tu apuesta\n"));
    if (apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
        console.log("".concat(us.getName(), " tu apuesta es menor a la apuesta minima de ").concat(juegos.getApuestaMin()));
        console.log("\nEmpieza a jugar...\na = Apostar\ns = Salir");
    }
    else if (apuestaUs > us.getMonedas()) {
        console.clear();
        console.log("No tienes el dinero suficiente, lo siento.");
        console.log("\nEmpieza a jugar...\na = Apostar\ns = Salir");
    }
    else {
        console.clear();
        juegos.primMano();
        console.log("Quieres pedir otra carta?\no = Otra\nt = Terminar\ns = salir");
        rl.promptCLLoop({
            o: function () {
                console.clear();
                juegos.validacionOtraCarta();
                console.log("Quieres pedir otra carta?\no = Otra\nt = Terminar\ns = salir");
            },
            t: function () {
                console.clear();
                juegos.winLose(us, apuestaUs, premios);
                console.log("Presione \ns = Salir");
            },
            s: function () {
                juegos.resetearMano();
                console.clear();
                console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                return true;
            }
        });
    }
};
// funciones de traga monedas
var funtTragaMonedas = function (juegos) {
    console.clear();
    var apuestaUs = parseInt(rl.question("Ingresa tu apuesta\n"));
    if (apuestaUs === 0 || apuestaUs <= juegos.getApuestaMin()) {
        console.log("".concat(usuario01.getName(), " tu apuesta es menor a la apuesta minima de ").concat(juegos.getApuestaMin()));
        console.log("\nEmpieza a jugar...\na = Apostar\ns = Salir");
    }
    else if (apuestaUs > usuario01.getMonedas()) {
        console.clear();
        console.log("No tienes el dinero suficiente, lo siento.");
        console.log("\nEmpieza a jugar...\na = Apostar\ns = Salir");
    }
    else {
        var result = juegos.apuestaTragaMonedas();
        console.log(result);
        if (result > 0) {
            var win = apuestaUs * result;
            usuario01.winMonedas(win);
            console.table(usuario01.getInfoUsuario());
            console.log("Ganaste...\nVolver a jugar...\na = Apostar\ns = Salir");
        }
        else {
            usuario01.loseMonedas(apuestaUs);
            console.table(usuario01.getInfoUsuario());
            console.log("Perdiste...\nVolver a jugar...\na = Apostar\ns = Salir");
        }
    }
};
if (usuario01.confirmAge(age) === true) {
    console.clear();
    console.log("Bienvenido a ");
    logo();
    var monedaUs = parseInt(rl.question("".concat(name, "\u00BFCuanto dinero queres cargar?\n")));
    usuario01.setMonedas(monedaUs);
    console.clear();
    console.log("Esta es tu targeta de Usuario");
    console.table(usuario01.getInfoUsuario());
    showMenu();
    rl.promptCLLoop({
        r: function () {
            console.clear();
            showMesas();
            rl.promptCLLoop({
                a: function () {
                    console.clear();
                    console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
                    rl.promptCLLoop({
                        r: function () {
                            apuestaRuletaColorR(usuario01, ruleta01, 2);
                        },
                        n: function () {
                            apuestaRuletaColorN(usuario01, ruleta01, 2);
                        },
                        v: function () {
                            apuestaRuletaColorV(usuario01, ruleta01, 100);
                        },
                        p: function () {
                            apuestaRuletaP(usuario01, ruleta01, 5);
                        },
                        i: function () {
                            apuestaRuletaI(usuario01, ruleta01, 5);
                        },
                        s: function () {
                            console.clear();
                            console.log("Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ".concat(ruleta01.getMesa(), "\nb = Mesa ").concat(ruleta02.getMesa(), "\nc = Mesa ").concat(ruleta03.getMesa(), "\ns = Salir\n"));
                            return true;
                        }
                    });
                },
                b: function () {
                    console.clear();
                    console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
                    rl.promptCLLoop({
                        r: function () {
                            apuestaRuletaColorR(usuario01, ruleta02, 2);
                        },
                        n: function () {
                            apuestaRuletaColorN(usuario01, ruleta02, 2);
                        },
                        v: function () {
                            apuestaRuletaColorV(usuario01, ruleta02, 100);
                        },
                        p: function () {
                            apuestaRuletaP(usuario01, ruleta02, 5);
                        },
                        i: function () {
                            apuestaRuletaI(usuario01, ruleta02, 5);
                        },
                        s: function () {
                            console.clear();
                            console.log("Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ".concat(ruleta01.getMesa(), "\nb = Mesa ").concat(ruleta02.getMesa(), "\nc = Mesa ").concat(ruleta03.getMesa(), "\ns = Salir\n"));
                            return true;
                        }
                    });
                },
                c: function () {
                    console.clear();
                    console.log("\nEleji a que apostarle\nr= Rojo\nn= Negro\nv= Verde\np = Numero Par\ni = Numero Impar\ns=Salir");
                    rl.promptCLLoop({
                        r: function () {
                            apuestaRuletaColorR(usuario01, ruleta03, 2);
                        },
                        n: function () {
                            apuestaRuletaColorN(usuario01, ruleta03, 2);
                        },
                        v: function () {
                            apuestaRuletaColorV(usuario01, ruleta03, 100);
                        },
                        p: function () {
                            apuestaRuletaP(usuario01, ruleta03, 5);
                        },
                        i: function () {
                            apuestaRuletaI(usuario01, ruleta03, 5);
                        },
                        s: function () {
                            console.clear();
                            console.log("Estas en la seccion de Ruletas\nA que mesa quiere ingresar?\n\na = Mesa ".concat(ruleta01.getMesa(), "\nb = Mesa ").concat(ruleta02.getMesa(), "\nc = Mesa ").concat(ruleta03.getMesa(), "\ns = Salir\n"));
                            return true;
                        }
                    });
                },
                s: function () {
                    console.clear();
                    showMenu();
                    return true;
                }
            });
        },
        b: function () {
            console.clear();
            console.log("Estas en la seccion de BlackJack\nA que mesa quiere ingresar?\n\na = Mesa ".concat(blackJack01.getMesa(), "\nb = Mesa ").concat(blackJack02.getMesa(), "\nc = Mesa ").concat(blackJack03.getMesa(), "\ns = Salir\n"));
            rl.promptCLLoop({
                a: function () {
                    console.clear();
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                    rl.promptCLLoop({
                        a: function () {
                            funcBlackJack(blackJack01, usuario01, 3);
                        },
                        s: function () {
                            console.clear();
                            showMesas();
                            return true;
                        }
                    });
                },
                b: function () {
                    console.clear();
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                    rl.promptCLLoop({
                        a: function () {
                            funcBlackJack(blackJack02, usuario01, 3);
                        },
                        s: function () {
                            console.clear();
                            showMesas();
                            return true;
                        }
                    });
                },
                c: function () {
                    console.clear();
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                    rl.promptCLLoop({
                        a: function () {
                            funcBlackJack(blackJack03, usuario01, 3);
                        },
                        s: function () {
                            console.clear();
                            showMesas();
                            return true;
                        }
                    });
                },
                s: function () {
                    console.clear();
                    showMenu();
                    return true;
                }
            });
        },
        t: function () {
            console.clear();
            console.log("Estas en la seccion de Traga monedas\nA que mesa quiere ingresar?\n\na = Mesa ".concat(tragaMonedas01.getMesa(), "\nb = Mesa ").concat(tragaMonedas02.getMesa(), "\nc = Mesa ").concat(tragaMonedas03.getMesa(), "\ns = Salir\n"));
            rl.promptCLLoop({
                a: function () {
                    console.clear();
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                    rl.promptCLLoop({
                        a: function () {
                            funtTragaMonedas(tragaMonedas01);
                        },
                        s: function () {
                            console.clear();
                            showMesas();
                            return true;
                        }
                    });
                },
                b: function () {
                    console.clear();
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                    rl.promptCLLoop({
                        a: function () {
                            funtTragaMonedas(tragaMonedas02);
                        },
                        s: function () {
                            console.clear();
                            showMesas();
                            return true;
                        }
                    });
                },
                c: function () {
                    console.clear();
                    console.log("Empieza a jugar...\na = Apostar\ns = Salir");
                    rl.promptCLLoop({
                        a: function () {
                            funtTragaMonedas(tragaMonedas03);
                        },
                        s: function () {
                            console.clear();
                            showMesas();
                            return true;
                        }
                    });
                },
                s: function () {
                    console.clear();
                    showMenu();
                    return true;
                }
            });
        },
        c: function () {
            console.clear();
            console.log("r = Recargar\ns = Salir");
            rl.promptCLLoop({
                r: function () {
                    console.clear();
                    var newSaldo = parseInt(rl.question("Cuanto desea recargar?\n"));
                    usuario01.winMonedas(newSaldo);
                    console.log("s = Salir");
                },
                s: function () {
                    console.clear();
                    console.table(usuario01);
                    showMenu();
                    return true;
                }
            });
        },
        s: function () {
            console.clear();
            console.log("".concat(name, "... Volve cuando quieras!"));
            return true;
        }
    });
}
