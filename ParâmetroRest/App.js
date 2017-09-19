function print(nome) {
    var sobreNome = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sobreNome[_i - 1] = arguments[_i];
    }
    return nome + " " + sobreNome.join(" ");
}
console.log(print("José", "Gabriel", "Neves", "da", "Silva"));
//# sourceMappingURL=App.js.map