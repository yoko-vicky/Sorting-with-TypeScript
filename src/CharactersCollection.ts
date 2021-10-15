import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
  constructor(
    public data: string
  ) {
    super()
   }

  get length ():number {
    return this.data.length
  }

  compare(currentIndex:number): boolean{
    return this.data[currentIndex].toLowerCase() < this.data[currentIndex-1].toLowerCase()
  }

  swap (indexOne: number, indexTwo: number): void{
    const characters = this.data.split('')
    const tempo = characters[indexOne]
    characters[indexOne] = characters[indexTwo]
    characters[indexTwo] = tempo
    this.data = characters.join('')
  }
}
