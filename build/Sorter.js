"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var swapped = false;
        for (var i = this.collection.length - 1; i >= 0; i--) {
            for (var j = 0; j < this.collection.length; j++) {
                if (this.collection.compare(j)) {
                    this.collection.swap(j, j + 1);
                    swapped = true;
                }
            }
            if (!swapped)
                break;
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
