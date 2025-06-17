// 10-->5-->16
// 40-->10-->5-->16
// 40-->10-->5-->99-->16

// Linked List visualization
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next:{
//                 value:16,
//                 next: null
//             }
//         },
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new Node(value); // instance
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // this.head = {
    //   value: value,
    //   next: this.head,
    // };
    // this.tail;
    // this.length++;

    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    // check params
    if (index <= 0) {
      console.log("Please enter number between 1.." + this.length);
      return `Please enter number between 1..${this.length}`;
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this._traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    newNode.next = holdingPointer;
    leader.next = newNode;

    // if (index === 0) {
    //   return this.prepend(value);
    // }
    // let pre = this.head;
    // for (let k = 0; k < index - 1; k++) {
    //   pre = pre.next;
    // }
    // const aft = pre.next;
    // const newNode = new Node(value);
    // newNode.next = aft;
    // pre.next = newNode;
    this.length++;
    return this;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index <= 0) {
      console.log("Please enter number between 1.." + this.length);
      return `Please enter number between 1..${this.length}`;
    }
    const leader = this._traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(40);
// myLinkedList.insert(1, 99);
myLinkedList.insert(10, 22);
myLinkedList.remove(4);
myLinkedList.remove(1);
myLinkedList.remove(0);
myLinkedList.printList();
// console.log(myLinkedList);
