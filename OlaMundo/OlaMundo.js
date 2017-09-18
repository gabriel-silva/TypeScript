"use strict";
exports.__esModule = true;
var OlaMundo = /** @class */ (function () {
    function OlaMundo() {
    }
    OlaMundo.prototype.printFunc = function () {
        console.log("Olá Mundo!");
    };
    return OlaMundo;
}());
exports.OlaMundo = OlaMundo;
var olaMundo = new OlaMundo();
olaMundo.printFunc();
