"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(name, age) {
        this.name = name;
        this.age = age;
    }
    Usuario.prototype.getName = function () {
        return this.name;
    };
    Usuario.prototype.getAge = function () {
        return this.age;
    };
    Usuario.prototype.confirmName = function (name) {
        if (!name) {
            console.log("Tu nombre no es valido");
        }
    };
    Usuario.prototype.confirmAgre = function (age) {
        if (!age || age < 18) {
            console.log("No tenes la edad suficiente para ingresar");
        }
        else {
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
