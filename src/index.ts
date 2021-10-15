import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { ListNode, LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('XangaiuwqHJAS')
const rootNode = new ListNode(7)
const linkedList = new LinkedList(rootNode)
linkedList.add(8)
linkedList.add(9)
linkedList.add(2)
linkedList.add(5)
// console.log(linkedList.length)
// console.log(linkedList.at(3))

const sortNumbers = new Sorter(numbersCollection)
sortNumbers.sort()
console.log(sortNumbers.collection)

const sortCharacters = new Sorter(charactersCollection)
sortCharacters.sort()
console.log(sortCharacters.collection)

const sortLinkedList = new Sorter(linkedList)
sortLinkedList.sort()
linkedList.print()
