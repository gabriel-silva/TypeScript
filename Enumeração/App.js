function cores() {
    var Cores;
    (function (Cores) {
        Cores[Cores["PRETO"] = 0] = "PRETO";
        Cores[Cores["AZUL"] = 1] = "AZUL";
        Cores[Cores["VERMELHO"] = 2] = "VERMELHO";
    })(Cores || (Cores = {}));
    ;
    var cor = Cores.PRETO;
    switch (cor) {
        case Cores.AZUL:
            console.log("AZUL");
            break;
        case Cores.PRETO:
            console.log("PRETO");
            break;
        case Cores.VERMELHO:
            console.log("VERMELHO");
            break;
    }
}
cores();
//# sourceMappingURL=App.js.map