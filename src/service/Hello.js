"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.say = function (name) {
        return "Olá, ${name}!";
    };
    return Hello;
}());
exports.Hello = Hello;
