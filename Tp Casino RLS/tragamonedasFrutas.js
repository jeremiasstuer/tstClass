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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TragaMonedasFruta = void 0;
var tragaMonedas_1 = require("./tragaMonedas");
var TragaMonedasFruta = /** @class */ (function (_super) {
    __extends(TragaMonedasFruta, _super);
    function TragaMonedasFruta(nombre, apuestaMin, mesa) {
        var _this = _super.call(this, nombre, apuestaMin, mesa) || this;
        _this.icono = ["banana", "manazana", "comodin"];
        return _this;
    }
    TragaMonedasFruta.prototype.apuestaTragaMonedas = function () {
        var uno = this.numbAleatorio();
        var dos = this.numbAleatorio();
        var tres = this.numbAleatorio();
        console.log(uno, dos, tres);
        if (uno === dos && dos === tres) {
            switch (uno) {
                case this.icono[0]:
                    return 2; //
                    break;
                case this.icono[1]:
                    return 3;
                    break;
                case this.icono[2]:
                    return 10;
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
    return TragaMonedasFruta;
}(tragaMonedas_1.TragaMonedas));
exports.TragaMonedasFruta = TragaMonedasFruta;
