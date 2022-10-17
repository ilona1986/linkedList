export interface AbstractList<T> {

  addItems(...arr: T[]): void;
  push(value: T): T;
  pop(): T;
  shift(): T | undefined;
  unshift(value: T): void;
  getItem(index: number): T | undefined;
  splice(start: number, end: number): AbstractList<T> | null;
  toArray(): number;
  addToTheEnd(): void;
  insertInPosition(): void;
  removeFromPosition(): void;
  removeElementByValue(): void;
  getNodeByPosition(): void;
  getIndexOf(): void;
  isEmpty(): void;
  getLength(): void;
  print(): void;
}

export class DoubleNode<T> {
  public value: T;
  public next: DoubleNode<T> | null;
  public previous: DoubleNode<T> | null;

  constructor(value: T, previous: DoubleNode<T> | null = null) {
    this.value = value;
    this.next = null;
    this.previous = previous;
  }
}

export class DoubleList<T> {
  public _head: DoubleNode<T> | null;
  public _length: number;
  public _last: DoubleNode<T> | null;
  constructor() {
    this._length = 0;
    this._head = null;
    this._last = null;
  }

  addItems(...arr: T[]) {
    if (arr.length === 1) {
      this._head = new DoubleNode(arr[0]);
      this._last = this._head;
      this._length++;
    } else if (arr.length > 1) {
      this._head = new DoubleNode(arr[0]);
      this._last = this._head;
      this._length++;
      let currentNode = this._head;
      for (let i = 1; i < arr.length; i++) {
        currentNode.next = new DoubleNode(arr[i], currentNode);
        this._length++;
        this._last = currentNode.next;
        currentNode = currentNode.next;
      }
      // return true;
    }
  }

  push(value: T) {
    if (!this._head) {
      this._head = new DoubleNode(value);
      this._last = this._head;
    } else {
      this._last = this._last!.next = new DoubleNode(value, this._last);
    }
    this._length++;
    return value;
  }

  pop(): T {
    if (!this._head) {
      console.error(new Error("LinkedList empty. Please use Llist.pop() or Llist.addItems() for add item"))
      throw new Error("LinkedList empty. Please use Llist.pop() or Llist.addItems() for add item");
    } else {
      let value = this._last!.value;
      if (this._length === 1) {
        this._head = null;
        this._last = null;
        this._length = 0;
      } else {
        this._last = this._last!.previous;
        this._last!.next = null;
        this._length--;
      }
      return value;
    }
  }


  shift(): T | undefined {
    if (!this._head) {
      console.error(new Error("LinkedList empty. Please use Llis.pop() or Llist.addItems() for add item"))
    } else {
      let value = this._head.value;
      if (this._length === 1) {
        this._head = null;
        this._last = null;
        this._length = 0;
      } else {
        this._head = this._head.next;
        this._head!.previous = null;
        this._length--;
      }
      return value;
    }
  }

  unshift(value: T): void {
    if (this._length === 0) {
      this._head = new DoubleNode<T>(value);
      this._last = this._head;
      this._length++;
    } else {
      let nextNode = this._head
      this._head = new DoubleNode(value);
      nextNode!.previous = this._head;
      this._head.next = nextNode;
      this._length++;
    }
  }
  getItem(index: number): T | undefined {
    let currentNode = this._head;
    if (index === 0) {
      return currentNode!.value;
    } else if (index >= this._length) {
      return undefined;
    }
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode!.next;
    }
    return currentNode!.value;
  }

  splice(start: number, end = this._length - 1): DoubleNode<T> | null {

    let currentNodeStart = this._head;
    for (let i = 0; i < start - 1; i++) {
      currentNodeStart = currentNodeStart!.next;
    }
    let currentNodeEnd = currentNodeStart;
    if (end === this._length - 1 || end === 0) {
      currentNodeEnd!.previous = currentNodeStart!.previous;
      currentNodeStart!.next = null;
      let currentNode = this._head;
      this._length = 0;
      while (currentNode) {
        currentNode = currentNode.next;
        this._length++;
      }
      this._last = currentNodeStart;
      return this._head;
    }
    for (let i = 0; i <= end; i++) {
      currentNodeEnd = currentNodeEnd!.next;
    }

    if (start === 0) {
      this._head = currentNodeEnd;
    } else {
      currentNodeStart!.next = currentNodeEnd;
    }

    currentNodeEnd!.previous = currentNodeStart;

    let currentNode = this._head;
    this._length = 0;
    while (currentNode) {
      currentNode = currentNode.next;
      this._length++;
    }
    return this._head;
  }

  toArray() {
    let arr = [];
    let currentNode = this._head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  get length() {
    return this._length;
  }
}
