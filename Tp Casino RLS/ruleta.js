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
exports.__esModule = true;
exports.Ruleta = void 0;
var juegos_1 = require("./juegos");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(nombre, apuestaMin, mesa) {
        var _this = _super.call(this, nombre, mesa, apuestaMin) || this;
        _this.rojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        _this.negro = [2, 4, 3, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        _this.verde = 0;
        _this.impar = [];
        _this.par = [];
        _this.numeros = _this.rojo.concat(_this.negro);
        return _this;
    }
    Ruleta.prototype.numbAleatorio = function () { return Math.floor(Math.random() * 36); };
    Ruleta.prototype.parImpar = function () {
        for (var i = 1; i <= this.numeros.length; i++) {
            if (i % 2 == 0) {
                this.par.push(i);
            }
            else {
                this.impar.push(i);
            }
        }
    };
    Ruleta.prototype.apuestaColorN = function () {
        var numbAleatorio = this.numbAleatorio();
        if (this.negro.indexOf(numbAleatorio) != -1) {
            return true;
        }
        else {
            return false;
        }
    };
    Ruleta.prototype.apuestaColorR = function () {
        var numbAleatorio = this.numbAleatorio();
        if (this.rojo.indexOf(numbAleatorio) != -1) {
            return true;
        }
        else {
            return false;
        }
    };
    Ruleta.prototype.apuestaColorV = function () {
        var numbAleatorio = this.numbAleatorio();
        if (this.verde === numbAleatorio) {
            return true;
        }
        else {
            return false;
        }
    };
    Ruleta.prototype.apuestaPar = function () {
        this.parImpar();
        var resultAleatorio = this.numbAleatorio();
        if (this.par.indexOf(resultAleatorio) != -1) {
            return true;
        }
        else {
            return false;
        }
    };
    Ruleta.prototype.apuestaImpar = function () {
        this.parImpar();
        var resultAleatorio = this.numbAleatorio();
        if (this.impar.indexOf(resultAleatorio) != -1) {
            return true;
        }
        else {
            return false;
        }
    };
    return Ruleta;
}(juegos_1.Juegos));
exports.Ruleta = Ruleta;
