//construtor no TypeScript será declarado pelo método construct e não pelo o nome da class.
export class App{
    private nome: string;
    private idade: number;

    //construtor no TypeScript
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    
    set setNome(nome: string) {
        this.nome = nome;
    }

    get getNome() : string{
        return this.nome;
    }

    set setIdade(idade : number){
        this.idade = idade;
    }

    get getIdade() : number{
        return this.idade;
    }

}

let c = new App("Gabriel", 23);
console.log(c);