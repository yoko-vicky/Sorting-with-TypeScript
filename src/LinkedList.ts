import { Sortable } from "./Sorter";

export class ListNode {
  constructor(
    public value: number,
    public next: ListNode | null = null
  ) {}
}

export class LinkedList implements Sortable{
  constructor(
    public head: ListNode | null = null
  ) { }

  add (value: number) {
    const newNode = new ListNode(value)
    if (!this.head) {
      this.head = newNode
      return
    }

    let pointer: ListNode | null = this.head
    while (pointer && pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = newNode
  }

  get length(): number {
    if (!this.head) {
      return 0
    }

    let counter: number = 1;
    let pointer = this.head
    while (pointer && pointer.next) {
      counter += 1
      pointer = pointer.next
    }
    return counter
  }

  at (index: number):ListNode {
    if (!this.head) {
      throw new Error("LinkList has no head");

    }

    let pointer: ListNode | null = this.head
    let i: number = 0
    while (pointer && pointer.next && i < index) {
      pointer = pointer.next
      i++
    }
    return pointer
  }

  compare (currentIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");

    }
    return this.at(currentIndex).value < this.at(currentIndex - 1).value
  }

  swap (indexOne: number, indexTwo: number):void {
    const tempo = this.at(indexOne).value
    this.at(indexOne).value = this.at(indexTwo).value
    this.at(indexTwo).value = tempo
  }

  print ():void {
    if (!this.head) {
      return
    }

    let pointer: ListNode | null = this.head
    while (pointer && pointer.next) {
      console.log(pointer.value)
      pointer = pointer.next
    }
  }
}
