export interface Sortable {
  length: number
  compare (currentIndex: number): boolean
  swap (indexOne: number, indexTwo: number): void
}

export abstract class Sorter {
  abstract length: number
  abstract compare (currentIndex: number): boolean
  abstract swap (indexOne: number, indexTwo: number): void

  sort(): void {
    let swapped:boolean = false
    const { length } = this
    for (let i = length - 1; i >= 0; i--){
      for (let j = 1; j < length; j++){
        if (this.compare(j)) {
          this.swap(j, j-1)
          swapped = true
        }
      }
      if(!swapped) break
    }
  }
}
