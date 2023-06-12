class Stack {
 constructor(){
  this.stack = [];
 }
 isEmpty=()=>{
  return this.stack.length===0
 }
 push=(data)=>{
  this.stack.push(data)
 }
 pop=()=>{
  this.stack.pop()
 }
 peek=()=>{
  return this.stack[this.stack.length-1]
 }
 print=()=>{
  this.stack.forEach((data)=>console.log(data))
 }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.pop()
console.log("-peek->",stack.peek());
stack.print()