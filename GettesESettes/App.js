//Gettes e Settes sempre será declarado pelo método set e get, e não pelo nome da função(Método) como outras linguagens.
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
var p = new Pessoa();
p.setNome = "Gabriel";
p.setIdade = 23;
console.log(p.getNome);
console.log(p.getIdade);
//# sourceMappingURL=App.js.map