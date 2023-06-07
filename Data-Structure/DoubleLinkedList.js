// Double Linked List

// Initialize O(1)ST
// Set O(n)T O(1)S
// Insert O(1) ST - head,tail , O(n)T (1)S not in head / tail
// Replace O(1) ST - head,tail , O(n)T (1)S not in head / tail
// Delete O(1) ST - head,tail , O(n)T (1)S not in head / tail
// Travers O(n)T (1)S

class Node {
 constructor(data) {
  this.prev = null;
  this.data = data;
  this.next = null;
 }
}

class DoubleLinkedList {
 constructor(){
  this.head = null;
  this.tail = null;
  this.size = 0;
 }
 isEmpty = () =>{
  return this.size === 0;
 }
 addNode = (value) =>{
  const node = new Node(value);
  if(this.isEmpty()){
   this.head = node;
  }else{
   this.tail.next = node;
   node.prev = this.tail;
  }
  this.tail = node;
  this.size++;
 }
 removeNode = (value) =>{
  let curr = this.head;
  let prev = null;
  while(curr){
   if(curr.data==value){
    if(prev==null){
     this.head = curr.next;
     curr.next.prev = null;
    }else{
     prev.next = curr.next;
     curr.next.prev = prev;
    }
    this.size--;
   }
   prev = curr;
   curr = curr.next;
  }
 }
 print = () =>{
  let curr = this.head;
  let values = '';
  while(curr){
   values += curr.data + ' ';
   curr = curr.next;
  }
  return values;
 }
}

const dl = new DoubleLinkedList();
dl.addNode(1);
dl.addNode(2);
dl.addNode(3);
dl.addNode(4);
dl.addNode(5);

console.log(dl.print());

