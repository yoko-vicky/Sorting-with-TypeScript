export interface Sortable {
  length: number
  compare (currentIndex: number): boolean
  swap (indexOne: number, indexTwo: number): void
}

export class Sorter {
  constructor(
    public collection: Sortable
  ) { }

  sort():void {
    let swapped = false
    for (let i = this.collection.length - 1; i >= 0; i--){
      for (let j = 0; j < this.collection.length; j++){
        if (this.collection.compare(j)) {
          this.collection.swap(j, j+1)
          swapped = true
        }
      }
      if(!swapped) break
    }
  }
}
