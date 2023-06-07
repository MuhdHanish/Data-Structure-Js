// Single Linked List

// Initialize O(1)ST
// Set O(n)T O(1)S
// Insert O(1) ST - head,tail , O(n)T (1)S not in head / tail
// Replace O(1) ST - head,tail , O(n)T (1)S not in head / tail
// Delete O(1) ST - head,tail , O(n)T (1)S not in head / tail
// Travers O(n)T (1)S


class Node {
 constructor(data) {
  this.data = data;
  this.next = null;
 }
}

class SingLinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.size = 0;
 }
 isEmpty = () => {
  return this.size === 0;
 }
 addNode = (value) => {
  const node = new Node(value);
  if (this.isEmpty()) {
   this.head = node;
   this.tail = node;
  } else {
   this.tail.next = node;
   this.tail = node;
  }
  this.size++
 }
 removeNode = (value) => {
  let curr = this.head;
  let prev = null;
  while (curr) {
   if (value === curr.data) {
    if (prev === null) {
     this.head = curr.next;
    } else {
     prev.next = curr.next;
    }
   }
   prev = curr;
   curr = curr.next;
  }
 }
 print = () => {
  let curr = this.head;
  let values = '';
  if (this.isEmpty()) {
   return 'Empty List';
  } else {
   while (curr) {
    values += curr.data + ' ';
    curr = curr.next;
   }
   return values;
  }
 }
 reverse = () =>{
  const reversedList = new SingLinkedList();
  this.reverseHelper(this.head,reversedList);
  return reversedList;
 }
 reverseHelper = (node,reversedList) =>{
  if(node==null){
   return;
  }
  this.reverseHelper(node.next,reversedList);
  reversedList.addNode(node.data)
  return reversedList
 }
}

const sL = new SingLinkedList();
sL.addNode(1);
sL.addNode(2);
sL.addNode(3);
sL.addNode(4);
sL.addNode(5);

console.log(sL.print());
console.log(sL.reverse().print());

