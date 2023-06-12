class CircularQueue {
 constructor(capacity) {
  this.items = new Array(capacity);
  this.capacity = capacity;
  this.currentLength = 0;
  this.front = -1;
  this.rear = -1;
 }

 isFull = () => {
  return this.currentLength === this.capacity;
 };

 isEmpty = () => {
  return this.currentLength === 0;
 };

 enQueue = (data) => {
  if (!this.isFull()) {
   this.rear = (this.rear + 1) % this.capacity;
   this.items[this.rear] = data;
   this.currentLength++;
   if (this.front === -1) {
    this.front = this.rear;
   }
  }
 };

 deQueue = () => {
  if (this.isEmpty()) {
   return null;
  }
  const item = this.items[this.front];
  this.items[this.front] = null;
  this.front = (this.front + 1) % this.capacity;
  this.currentLength--;
  if (this.isEmpty()) {
   this.front = -1;
   this.rear = -1;
  }
  return item; 
 };

 peek = () => {
  if (!this.isEmpty()) {
   return this.items[this.front];
  }
  return null;
 };

 print = () => {
  if (this.isEmpty()) {
   console.log('Queue is empty');
  } else {
   let str = '';
   let i;
   for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
    str += this.items[i] + ' ';
   }
   str += this.items[i];
   console.log(str);
  }
 };
}

const cirQueue = new CircularQueue(5);
console.log(cirQueue.isEmpty());
cirQueue.enQueue(10);
cirQueue.enQueue(50);
cirQueue.enQueue(30);
cirQueue.enQueue(40);
cirQueue.enQueue(20);
cirQueue.print();
