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
exports.TragaMonedas = void 0;
var juegos_1 = require("./juegos");
var TragaMonedas = /** @class */ (function (_super) {
    __extends(TragaMonedas, _super);
    function TragaMonedas(nombre, apuestaMin, mesa) {
        return _super.call(this, nombre, mesa, apuestaMin) || this;
    }
    TragaMonedas.prototype.numbAleatorio = function () { return 1 + Math.floor(Math.random() * 3); };
    TragaMonedas.prototype.apuestaTragaMonedas = function () {
        var uno = this.numbAleatorio();
        var dos = this.numbAleatorio();
        var tres = this.numbAleatorio();
        console.log(uno, dos, tres);
        if (uno === dos && uno === tres) {
            switch (uno) {
                case 1:
                    return 2; //
                    break;
                case 2:
                    return 3;
                    break;
                case 3:
                    return 4;
                    break;
                default:
                    return 0;
                    break;
            }
        }
        else {
            return 0;
        }
    };
    return TragaMonedas;
}(juegos_1.Juegos));
exports.TragaMonedas = TragaMonedas;
