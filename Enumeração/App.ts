function cores(){
    enum Cores {
         PRETO,
         AZUL,
        VERMELHO
    };

    let cor = Cores.PRETO
    switch(cor){
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