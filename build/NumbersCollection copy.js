"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (currentIndex) {
        return this.data[currentIndex + 1] < this.data[currentIndex];
    };
    NumbersCollection.prototype.swap = function (indexOne, indexTwo) {
        var tempo = this.data[indexOne];
        this.data[indexOne] = this.data[indexTwo];
        this.data[indexTwo] = tempo;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
// const collection = new NumbersCollection([1,2,3])
// console.log(collection.length)
// collection.compare
