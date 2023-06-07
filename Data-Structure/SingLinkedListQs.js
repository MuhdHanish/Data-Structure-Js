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
  const node = new Node(value)
  if (this.isEmpty()) {
   this.head = node;
  } else {
   this.tail.next = node;
  }
  this.tail = node;
  this.size++;
 }
 removeNode = (value) => {
  let curr = this.head;
  let prev = null;
  while (curr != null) {
   if (curr.data === value) {
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
  while (curr != null) {
   values += curr.data + ' ';
   curr = curr.next;
  }
  return values;
 }

 // add data in prev node 
 // data = new data added to prev node 
 // value = which values prev we add this data
 addToPrev = (data,value) =>{
  const node  = new Node(data)
  let curr = this.head;
  let prev = null;
  while(curr){
   if(curr.data==value){
    if(prev==null){
      node.next = this.head;
      this.head = node;
    }else{
      node.next = prev.next;
      prev.next = node;
    }
   }
   prev = curr;
   curr = curr.next;
  }
  return;
 }

 // add data in next node 
 // data = new data added to next node 
 // value = which values next we add this data
 addToNext = (data,value) =>{
  const node = new Node(data);
  let curr = this.head;
  while(curr){
   if(curr.data==value){
    if(curr.next){
     node.next = curr.next;
     curr.next = node;
    }else{
     curr.next = node;
     this.tail = node;
    }
   }
   curr = curr.next;
  }
  return;
 }

 // reverse linked list using recursion method
 reverse = () => {
  const reversedList = new SingLinkedList();
  this.reverseHelper(this.head, reversedList);
  return reversedList;
 }

 reverseHelper = (node, reversedList) => {
  if (node === null) {
   return;
  }
  this.reverseHelper(node.next, reversedList);
  reversedList.addNode(node.data);
  return reversedList;
 }
}

const sL = new SingLinkedList();
sL.addNode(1);
sL.addNode(2);
sL.addNode(3);
sL.addNode(4);
sL.addNode(5);

sL.addToPrev(4.5,5)
sL.addToNext(6,5)

console.log(sL.print());
const reversedList = sL.reverse();
console.log(reversedList.print());