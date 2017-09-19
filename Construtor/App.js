//construtor no TypeScript será declarado pelo método construct e não pelo o nome da class.
var App = /** @class */ (function () {
    //construtor no TypeScript
    function App(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Object.defineProperty(App.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "setIdade", {
        set: function (idade) {
            this.idade = idade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "getIdade", {
        get: function () {
            return this.idade;
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
var c = new App("Gabriel", 23);
console.log(c);
//# sourceMappingURL=App.js.map