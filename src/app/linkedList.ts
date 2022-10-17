export class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  public head: ListNode<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToTheEnd(value: T) {
    let node: ListNode<T> = new ListNode<T>(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while(current?.next) {
        current = current.next;
      }

      current!.next = new ListNode<T>(value);
    }

    this.length++;
  }

  insertInPosition(position: number, value: T) {
    if (position < 0 || position > this.length) {
        console.error('Inncorrect value of position');
        return;
    }

    let node = new ListNode<T>(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current!.next;
        index++;
      }

      prev!.next = node;
      node.next = current;
    }

    this.length++;
  }

  removeFromPosition(position: number) {
    if (position < 0 || position > this.length) {
      console.error('Inncorrect value of position');
      return;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current!.next;
    } else {
      let prev = null;
      let index = 0;

      while(index < position) {
        prev = current;
        current = current!.next;
        index++;
      }

      prev!.next = current!.next;
    }

    this.length--;
    return current!.value;
  }

  removeElementByValue(value: T) {
    return this.removeFromPosition(this.getIndexOf(value));
  }

  getNodeByPosition(position: number) {
    if (position < 0 || position > this.length) {
      console.error('Inncorrect value of position');
      return;
    }

    let current = this.head;
    let index = 0;

    while(index < position) {
      current = current!.next;
      index++;
    }

    return current!.value;
  }

  getIndexOf(value: T) {
    let current = this.head;
    let index = 0;

    while(current) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  getLength() {
    return this.length;
  }

  print() {
    let current = this.head;

    while(current) {
      console.log("Node: " + current.value);
      current = current.next;
    }
  }
}


