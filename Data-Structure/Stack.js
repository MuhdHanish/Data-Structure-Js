// Stack
// Last in first out

// Initialize O(1)ST
// Push O(1)ST
// Pop O(1)ST
// Peek O(1)ST
// Print O(n)T O(1)S


class Node {
 constructor(data) {
  this.data = data;
  this.next = null;
 }
}

class Stack {
 constructor(){
  this.top = null;
  this.size = 0;
 }
 isEmpty = () => {
  return this.size === 0;
 }
 push  = (value) =>{
  const node = new Node(value);
  if(this.isEmpty()){
   this.top = node;
  }else{
   node.next = this.top;
   this.top = node;
  }
  this.size++;
 }
 pop = () =>{
  this.top = this.top.next;
  this.size--;
 }
 peek = () =>{
  return this.top.data;
 }
 print = () =>{
  let curr = this.top;
  let values = '';
  while(curr){
   values += curr.data + ' ';
   curr = curr.next;
  }
  return values;
 }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.peek());
console.log(stack.print());