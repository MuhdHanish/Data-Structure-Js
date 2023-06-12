// CPU task sheduling 
// Callback queue in javascript runtime


class Queue{
 constructor(){
  this.queue = [];
 }
 enQueue=(data)=>{
  this.queue.push(data)
 }
 deQueue=()=>{
  this.queue.shift()
 }
 peek=()=>{
  return this.queue[0]
 }
 isEmpty=()=>{
  return this.queue.length===0
 }
 print=()=>{
  console.log(this.queue.toString())
 }
}

const queue = new Queue();
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(40)
queue.enQueue(30)
queue.enQueue(50)
queue.print()
queue.deQueue()
queue.isEmpty()
queue.print()
