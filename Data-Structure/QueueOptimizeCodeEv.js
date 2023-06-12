class Node {
 constructor(data){
  this.data = data
  this.next = null
 }
}

class Queue {
 constructor(){
  this.front = null;
  this.rear = null;
  this.size = 0;
 }
 isEmpty=()=>{
  return this.size===0
 }
 enQueue=(data)=>{
  const node = new Node(data)
  if(this.isEmpty()){
   this.front=node;
  }else{
   this.rear.next = node;
  }
  this.rear = node;
  this.size++;
 }
 deQueue=()=>{
  this.front = this.front.next
  this.size--;
 }
 peek=()=>{
  return this.front.data;
 }
 print=()=>{
  let curr = this.front;
  let values= ''
  while(curr){
   values += curr.data+' ';
   curr = curr.next;
  }
  return values;
 }
}

const queue  = new Queue();
queue.enQueue(20);
queue.enQueue(10);
queue.enQueue(10);
queue.enQueue(10);
queue.enQueue(10);
queue.deQueue()
console.log(queue.print())
