const LinkedList = function() {
  this.SIZE = 0;
  this.head = this.tail = null;
};

const Node = function(val) {
  this.value = val;
  this.next = null;
};

LinkedList.prototype.enqueue = function(value) {
  // create new node
  const node = new Node(value);
  // if ll doesn't already have a head ref, set it
  if(!this.head) this.head = this.tail = node;
  // otherwise update tail refs
  this.tail.next = node;
  this.tail = node;

  return ++this.SIZE;
};

LinkedList.prototype.dequeue = function() {
  // return null if size is already 0
  if (!this.SIZE) return null;
  // remove curr head and set head ref to next
  const removed = this.head;
  this.head = this.head.next;

  this.SIZE -= 1;
  return removed;
};

LinkedList.prototype.map = function(callback) {
  // store results in array
  const results = [];
  // iterate through linked list
  let currNode = this.head;
  while (currNode) {
    results.push(callback(currNode.value));
    currNode = currNode.next;
  }

  return results;
};

// test cases
const list = new LinkedList();
list.enqueue(4);
list.enqueue(5);
list.enqueue(6);
console.log(list);
console.log(list.dequeue());
console.log(list.dequeue());
list.enqueue(7);
console.log(list.map(num => num + 2));
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());

module.exports = { LinkedList, Node };
