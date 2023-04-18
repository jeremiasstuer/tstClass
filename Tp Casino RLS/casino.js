"use strict";
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
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.fondo = 1000000;
        this.usuario = [];
        this.juegos = [];
    }
    Casino.prototype.getInfoCasino = function () {
        return this;
    };
    Casino.prototype.getnombre = function () {
        return this.nombre;
    };
    Casino.prototype.getDireccion = function () {
        return this.direccion;
    };
    Casino.prototype.setUsuario = function (usuario) {
        this.usuario.push(usuario);
    };
    Casino.prototype.getJuegos = function () {
        return this.juegos;
    };
    Casino.prototype.setJuegos = function (newJuegos) {
        this.juegos = __spreadArray(__spreadArray([], this.juegos, true), [newJuegos], false);
    };
    Casino.prototype.getFondoC = function () {
        return this.fondo;
    };
    Casino.prototype.setFondoC = function (fondo) {
        this.fondo = fondo;
    };
    return Casino;
}());
exports.Casino = Casino;
