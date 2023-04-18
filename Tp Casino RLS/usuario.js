"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(name, age) {
        this.name = name;
        this.age = age;
        this.monedas = 0;
    }
    Usuario.prototype.getInfoUsuario = function () {
        return this;
    };
    Usuario.prototype.getName = function () {
        return this.name;
    };
    Usuario.prototype.getMonedas = function () {
        return this.monedas;
    };
    Usuario.prototype.setMonedas = function (monedas) {
        this.monedas = monedas;
    };
    Usuario.prototype.winMonedas = function (monedas) {
        this.monedas += monedas;
    };
    Usuario.prototype.loseMonedas = function (monedas) {
        this.monedas -= monedas;
    };
    Usuario.prototype.confirmName = function (name) {
        if (!name) {
            console.log("Tu nombre no es valido");
        }
    };
    Usuario.prototype.confirmAgre = function (age) {
        if (!age || age < 18) {
            console.warn("No tenes la edad suficiente para ingresar");
            return false;
        }
        else {
            return true;
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
