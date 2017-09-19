function print(nome: string, ...sobreNome:string[]){
    return nome + " " + sobreNome.join(" ");
}

console.log(print("José", "Gabriel", "Neves", "da", "Silva"));