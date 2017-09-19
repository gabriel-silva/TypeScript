class App{
    public nome: string;
}

class StringValidator{
    public nome: string;
}

let validators: { [s: string]: StringValidator; } = {};
let app = new App();
app.nome = "Gabriel";

validators['n'] = app;
console.log(validators['n']);

//impressão => App { nome: 'Gabriel' }