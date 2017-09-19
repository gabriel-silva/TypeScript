/*Parâmentros Rest
Quando você não sabe quantos parâmetros deseja passar para uma determinada
função ao mesmo tempo. Os parâmentros Rest são procedidos por: ... e seguidos por colchetes []

Ex:

*/
function print(nome) {
    var sobrenome = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sobrenome[_i - 1] = arguments[_i];
    }
    return nome + " " + sobrenome.join(" ");
}
console.log(print("José", "Gabriel", "Neves", "da", "Silva"));
//# sourceMappingURL=App.js.map