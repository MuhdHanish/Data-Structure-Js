class MinHeap {
 constructor(arr) {
  this.buildHeap(arr)
 }
 buildHeap(arr) {
  this.minHeap = arr;
  for (let i = this.parent(this.minHeap.length - 1); i >= 0; i--) {
  this.shiftDown(i)
  }
 }
 shiftDown(currIdx) {
  let endIdx = this.minHeap.length - 1;
  let leftIdx = this.leftChild(currIdx);
  while (leftIdx <= endIdx) {
   let rightIdx = this.rightChild(currIdx);
   let idxToSwap;
   if (rightIdx < endIdx && this.minHeap[rightIdx] < this.minHeap[leftIdx]) {
    idxToSwap = rightIdx;
   } else {
    idxToSwap = leftIdx;
   }
   if (this.minHeap[currIdx] > this.minHeap[idxToSwap]) {
    [this.minHeap[currIdx], this.minHeap[idxToSwap]] = [this.minHeap[idxToSwap], this.minHeap[currIdx]];
    currIdx = idxToSwap;
    leftIdx = this.leftChild(currIdx);
   }else{
    return;
   }
  }
 }
 shiftUp(currIdx){
  let parentIdx = this.parent(currIdx);
  while(currIdx>0&&this.minHeap[parentIdx]>this.minHeap[currIdx]){
   [this.minHeap[currIdx], this.minHeap[parentIdx]] = [this.minHeap[parentIdx], this.minHeap[currIdx]];
   currIdx = parentIdx;
   parentIdx = this.parent(currIdx)
  }
 }
 peek(){
  return this.minHeap[0];
 }
 insert(data){
  this.minHeap.push(data);
  this.shiftUp(this.minHeap.length-1)
 }
 remove(){
  this.minHeap[0] = this.minHeap.pop()
  this.shiftDown(0)
 }
 leftChild(i) {
  return ((i * 2) + 1)
 }
 rightChild(i) {
  return ((i * 2) + 2)
 }
 parent(i) {
  return Math.floor((i - 1) / 2)
 }
 display(){
  for(let i=0;i<this.minHeap.length;i++){
   console.log(this.minHeap[i])
  }
 }
}

const minHeap = new MinHeap([6,2,8,1])
minHeap.remove()
minHeap.display()