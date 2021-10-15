import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable{
  constructor(
    public data: string
  ) { }

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
