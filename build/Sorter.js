"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var swapped = false;
        var length = this.length;
        for (var i = length - 1; i >= 0; i--) {
            for (var j = 1; j < length; j++) {
                if (this.compare(j)) {
                    this.swap(j, j - 1);
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
