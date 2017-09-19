var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());
var StringValidator = /** @class */ (function () {
    function StringValidator() {
    }
    return StringValidator;
}());
var validators = {};
var app = new App();
app.nome = "Gabriel";
validators['n'] = app;
console.log(validators['n']);
//impressão => App { nome: 'Gabriel' } 
//# sourceMappingURL=App.js.map