"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Object.defineProperty(Pessoa.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "setIdade", {
        set: function (idade) {
            this.idade = idade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "getIdade", {
        get: function () {
            return this.idade;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var p = new Pessoa();
p.setNome = "Gabriel";
p.setIdade = 23;
console.log(p.getNome);
console.log(p.getIdade);
//# sourceMappingURL=App.js.map