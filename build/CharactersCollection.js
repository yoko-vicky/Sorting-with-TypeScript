"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (currentIndex) {
        return this.data[currentIndex].toLowerCase() < this.data[currentIndex - 1].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (indexOne, indexTwo) {
        var characters = this.data.split('');
        var tempo = characters[indexOne];
        characters[indexOne] = characters[indexTwo];
        characters[indexTwo] = tempo;
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
