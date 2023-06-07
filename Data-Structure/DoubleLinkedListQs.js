
class Node {
 constructor(data) {
  this.prev = null;
  this.data = data;
  this.next = null;
 }
}

class DoubleLinkedList {
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
  } else {
   node.prev = this.tail;
   this.tail.next = node;
  }
  this.tail = node;
  this.size++;
 }
 removeNode = (value) => {
  let curr = this.head;
  let prev = null;
  while (curr) {
   if (curr.data == value) {
    if (prev == null) {
     this.head = curr.next;
     curr.next.prev = null;
    } else {
     prev.next = curr.next;
     curr.next.prev = prev;
    }
    this.size--;
   }
   prev = curr;
   curr = curr.next;
  }
 }
 print = () => {
  let curr = this.head;
  let values = '';
  while (curr) {
   values += curr.data + ' ';
   curr = curr.next;
  }
  return values;
 }
 // add to data in prev node
 // data = new data added to prev node
 // value = which values prev we add this data
 addToPrev = (data, value) => {
  const node = new Node(data);
  let curr = this.head;
  while (curr) {
    if (curr.data == value) {
      if (curr.prev == null) {
        node.next = this.head;
        this.head.prev = node; 
        this.head = node;
      } else {
        node.prev = curr.prev; 
        node.next = curr;
        curr.prev.next = node;
        curr.prev = node;
      }
      this.size++;
    }
    curr = curr.next;
  }
};

 // add to data in next node
 // data = new data added to next node
 // value = which values next we add this data
 addToNext = (data, value) => {
  const node = new Node(data);
  let curr = this.head;
  while (curr) {
   if(curr.data==value){
    if(curr.next==null){
     curr.next = node;
     node.prev = curr;
     this.tail = node;
    }else{
     curr.next.prev = node ;
     node.next = curr.next;
     curr.next = node;
     node.prev = curr;
    }
    this.size++;
   }
   curr = curr.next;
  }
 }
 removeDupes = () =>{
  let curr = this.head;
  while(curr!=null){
   let Next = curr.next;
   while(Next!=null && curr.data == Next.data){
    Next = Next.next;
   }
   if(Next==this.tail&& curr.data == Next.data){
    this.tail = curr;
    this.tail.next = null;
   }
  curr = curr.next;
  }
 }
}

const dL = new DoubleLinkedList();

dL.addNode(2);
dL.addNode(2);
dL.addNode(2);
dL.addNode(2);
dL.addNode(2);
dL.addNode(2);
dL.addNode(2);

dL.removeDupes();

console.log(dL.print());
