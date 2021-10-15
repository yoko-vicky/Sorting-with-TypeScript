"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
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
        while (pointer && pointer.next) {
            console.log(pointer.value);
            pointer = pointer.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
