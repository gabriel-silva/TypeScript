/*Parâmentros Rest
Quando você não sabe quantos parâmetros deseja passar para uma determinada
função ao mesmo tempo. Os parâmentros Rest são procedidos por: ... e seguidos por colchetes []

Ex:

*/

function print(nome: string, ...sobrenome:string[]){
    return nome + " " + sobrenome.join(" ");
}

console.log(print("José", "Gabriel", "Neves", "da", "Silva"));