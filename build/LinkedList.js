"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
var Sorter_1 = require("./Sorter");
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        var _this = _super.call(this) || this;
        _this.head = head;
        return _this;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var pointer = this.head;
        while (pointer && pointer.next) {
            pointer = pointer.next;
        }
        pointer.next = newNode;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var counter = 1;
            var pointer = this.head;
            while (pointer && pointer.next) {
                counter += 1;
                pointer = pointer.next;
            }
            return counter;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("LinkList has no head");
        }
        var pointer = this.head;
        var i = 0;
        while (pointer && pointer.next && i < index) {
            pointer = pointer.next;
            i++;
        }
        return pointer;
    };
    LinkedList.prototype.compare = function (currentIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(currentIndex).value < this.at(currentIndex - 1).value;
    };
    LinkedList.prototype.swap = function (indexOne, indexTwo) {
        var tempo = this.at(indexOne).value;
        this.at(indexOne).value = this.at(indexTwo).value;
        this.at(indexTwo).value = tempo;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var pointer = this.head;
        var values = [];
        while (pointer && pointer.next) {
            values.push(pointer.value);
            pointer = pointer.next;
        }
        console.log(values);
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
