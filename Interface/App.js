//Interface
var Telefone = /** @class */ (function () {
    function Telefone(modeloTefone, versaoTelefone) {
    }
    Telefone.prototype.toque = function () {
        return "Trim Trim";
    };
    return Telefone;
}());
var t = new Telefone("IntelBras", 7888);
console.log(t.toque());
//# sourceMappingURL=App.js.map