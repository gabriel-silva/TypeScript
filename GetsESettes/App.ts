export class Pessoa{
    private nome: string;
    private idade: number;

    set setNome(nome: string){
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

let p = new Pessoa();
p.setNome = "Gabriel";
p.setIdade = 23;
console.log(p.getNome);
console.log(p.getIdade);


