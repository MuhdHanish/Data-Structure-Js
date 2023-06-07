class Node {
 constructor(data){
  this.data = data;
  this.next = null;
 }
}

class Queue {
 constructor(){
  this.front = null;
  this.rear = null;
  this.size = 0;
 }
 isEmpty = () =>{
  return this.size === 0;
 }
 enqueue = (value) =>{
  const node = new Node(value);
  if(this.isEmpty()){
   this.front = node;
  }else{
   this.rear.next = node;
  }
  this.rear = node;
  this.size++;
 }
 dequeue = () =>{
  this.front = this.front.next;
  this.size--;
 }
 peek = () =>{
  return this.front.data;
 }
 print = () =>{
  let curr = this.front;
  let values = '';
  while(curr){
   values += curr.data + ' ';
   curr = curr.next;
  }
  return values;
 }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.peek());
console.log(queue.print());
