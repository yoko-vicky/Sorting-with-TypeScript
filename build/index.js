"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('XangaiuwqHJAS');
var rootNode = new LinkedList_1.ListNode(7);
var linkedList = new LinkedList_1.LinkedList(rootNode);
linkedList.add(8);
linkedList.add(9);
linkedList.add(2);
linkedList.add(5);
// console.log(linkedList.length)
// console.log(linkedList.at(3))
var sortNumbers = new Sorter_1.Sorter(numbersCollection);
sortNumbers.sort();
console.log(sortNumbers.collection);
var sortCharacters = new Sorter_1.Sorter(charactersCollection);
sortCharacters.sort();
console.log(sortCharacters.collection);
var sortLinkedList = new Sorter_1.Sorter(linkedList);
sortLinkedList.sort();
linkedList.print();
