"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.BlackJack = void 0;
var juegos_1 = require("./juegos");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(nombre, apuestaMin, mesa) {
        var _this = _super.call(this, nombre, mesa, apuestaMin) || this;
        _this.misCartas = [];
        _this.cartasCroupier = [];
        return _this;
    }
    BlackJack.prototype.getMisCartas = function () {
        return this.misCartas;
    };
    BlackJack.prototype.setMiNuevaCarta = function (carta) {
        this.misCartas = __spreadArray(__spreadArray([], this.misCartas, true), [carta], false);
    };
    BlackJack.prototype.resetearMano = function () {
        this.misCartas = [];
        this.cartasCroupier = [];
    };
    BlackJack.prototype.getCartarCrou = function () {
        return this.cartasCroupier;
    };
    BlackJack.prototype.numbAleatorio = function () { return 1 + Math.floor(Math.random() * 11); };
    BlackJack.prototype.primMano = function () {
        this.misCartas.push(this.numbAleatorio(), this.numbAleatorio());
        this.cartasCroupier.push(this.numbAleatorio(), this.numbAleatorio());
        console.log("Tus cartas: ".concat(this.misCartas, " = ").concat(this.sumarCartas(this.misCartas), "\nLas carta croupier: ").concat(this.cartasCroupier, " = ").concat(this.sumarCartas(this.cartasCroupier)));
    };
    BlackJack.prototype.sumarCartas = function (e) {
        var total = e.reduce(function (a, b) { return a + b; }, 0);
        return total;
    };
    BlackJack.prototype.addcrou = function () {
        if (this.sumarCartas(this.cartasCroupier) <= 16) {
            this.cartasCroupier.push(this.numbAleatorio());
        }
    };
    BlackJack.prototype.validacionOtraCarta = function () {
        if (this.sumarCartas(this.getMisCartas()) <= 21) {
            this.sumarCartas(this.getMisCartas());
            this.setMiNuevaCarta(this.numbAleatorio());
            console.log("Tus cartas = ".concat(this.getMisCartas(), " = ").concat(this.sumarCartas(this.getMisCartas())));
            this.addcrou();
            this.sumarCartas(this.getCartarCrou());
            console.log("Cartas Croupier = ".concat(this.getCartarCrou(), " = ").concat(this.sumarCartas(this.getCartarCrou())));
        }
    };
    BlackJack.prototype.winLose = function (usuario, apuestaUs, premio) {
        if (this.sumarCartas(this.getMisCartas()) <= 21 && this.sumarCartas(this.getCartarCrou()) <= 21) {
            if (this.sumarCartas(this.getMisCartas()) > this.sumarCartas(this.getCartarCrou())) {
                console.log("Ganaste... Estos son tus puntos ".concat(this.sumarCartas(this.getMisCartas())));
                var win = apuestaUs * premio;
                usuario.winMonedas(win);
                console.table(usuario.getInfoUsuario());
            }
            else {
                var lose = apuestaUs;
                usuario.loseMonedas(lose);
                console.table(usuario.getInfoUsuario());
                console.log("Perdiste... Estos son tus puntos ".concat(this.sumarCartas(this.getMisCartas())));
            }
        }
        else if (this.sumarCartas(this.getMisCartas()) > 21) {
            var lose = apuestaUs;
            usuario.loseMonedas(lose);
            console.table(usuario.getInfoUsuario());
            console.log("Lo siento te pasas... Estos son tus puntos ".concat(this.sumarCartas(this.getMisCartas())));
        }
        else if (this.sumarCartas(this.getCartarCrou())) {
            console.log("El croupier se paso... Estos son sus puntos ".concat(this.sumarCartas(this.getCartarCrou())));
        }
    };
    return BlackJack;
}(juegos_1.Juegos));
exports.BlackJack = BlackJack;
