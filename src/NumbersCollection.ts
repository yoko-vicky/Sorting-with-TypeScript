export class NumbersCollection{
  constructor(
    public data: number[]
  ) { }

  get length ():number {
    return this.data.length
  }

  compare(currentIndex:number): boolean{
    return this.data[currentIndex+1] < this.data[currentIndex]
  }

  swap(indexOne:number, indexTwo:number): void{
    const tempo = this.data[indexOne]
    this.data[indexOne] = this.data[indexTwo]
    this.data[indexTwo] = tempo
  }
}

const collection = new NumbersCollection([1,2,3])
console.log(collection.length)
// collection.compare