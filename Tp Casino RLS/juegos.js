"use strict";
exports.__esModule = true;
exports.Juegos = void 0;
var Juegos = /** @class */ (function () {
    function Juegos(nombre, mesa, apuestaMin) {
        this.nombre = nombre;
        this.mesa = mesa;
        this.apuestaMin = apuestaMin;
    }
    Juegos.prototype.getNombre = function () {
        return this.nombre;
    };
    Juegos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Juegos.prototype.getApuestaMin = function () {
        return this.apuestaMin;
    };
    Juegos.prototype.setApuestaMin = function (apuestaMin) {
        this.apuestaMin = apuestaMin;
    };
    Juegos.prototype.getMesa = function () {
        return this.mesa;
    };
    Juegos.prototype.numbAleatorio = function () {
    };
    return Juegos;
}());
exports.Juegos = Juegos;
