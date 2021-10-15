import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('XangaiuwqHJAS')

const sortNumbers = new Sorter(numbersCollection)
sortNumbers.sort()
console.log(sortNumbers.collection)

const sortCharacters = new Sorter(charactersCollection)
sortCharacters.sort()
console.log(sortCharacters.collection)
