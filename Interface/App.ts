//Interface

interface ITelefone{
    modeloTelefone: string;
    versaoTelefone: number;
    toque(): string;
}

class Telefone implements ITelefone{
    constructor(
        modeloTefone: string, 
        versaoTelefone: number
    ){}
    toque(){
        return "Trim Trim";
    }
}

let t = new Telefone("IntelBras", 7888);
console.log(t.toque());

