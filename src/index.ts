import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { ListNode, LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort()
const charactersCollection = new CharactersCollection('XangaiuwqHJAS')
charactersCollection.sort()

console.log(numbersCollection)
console.log(charactersCollection)

const rootNode = new ListNode(7)
const linkedList = new LinkedList(rootNode)
linkedList.add(8)
linkedList.add(9)
linkedList.add(2)
linkedList.add(5)
// console.log(linkedList.length)
// console.log(linkedList.at(3))
linkedList.sort()
linkedList.print()
