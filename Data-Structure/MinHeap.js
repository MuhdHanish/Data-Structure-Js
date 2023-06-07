class MinHeap {
 constructor(arr){
  this.buildHeap(arr);
 }
 buildHeap = (arr) =>{
  this.minHeap = arr
  for(let i = this.parent(this.minHeap.length-1);i>=0;i++){
   this.#shiftDown(i)
  }
 }
 #shiftDown(currIdx){
  let leftIdx = this.#leftChild(currIdx);
  let rightIdx = this.#rightChild(currIdx);
  let idxToSwap;
  if (rightIdx <= this.minheap.length-1 && this.minheap[rightIdx] < this.minheap[leftIdx]) {
    idxToSwap = rightIdx;
  } else {
    idxToSwap = leftIdx;
  }
  while (idxToSwap <= this.minheap.length-1  && this.minheap[idxToSwap] < this.minheap[currIdx]) {
    [this.minheap[currIdx], this.minheap[idxToSwap]] = [this.minheap[idxToSwap], this.minheap[currIdx]];
    currIdx = idxToSwap;
    leftIdx = this.#leftChild(currIdx);
    rightIdx = this.#rightChild(currIdx);
    if (rightIdx <= this.minheap.length-1 && this.minheap[rightIdx] < this.minheap[leftIdx]) {
     idxToSwap = rightIdx;
   } else {
     idxToSwap = leftIdx;
   }
  }
 }
 #shiftUp(currIdx){
  while(currIdx>0&&this.minheap[currIdx]>this.minheap[this.#parent(currIdx)]){
   [this.minheap[currIdx],this.minheap[this.#parent(currIdx)]] = [this.minheap[this.#parent(currIdx)],this.minheap[currIdx]]
   currIdx = this.#parent(currIdx)
  }
 }
 insert(data){
  this.minHeap.push(data)
  this.#shiftUp(this.minheap.length-1)
 }
 remove(){
  this.minheap[0] = this.minheap.pop()
  this.#shiftDown(0)
 }
 leftChild = (i) =>{
  return (i*2)+1 
 }
 rightChild = (i) =>{
  return (i*2)+2
 }
 parent = (i) =>{
  return Math.floor((i-1)/2)
 }
 display(){
  for(let i =0;i<this.minheap.length;i++){
   console.log(this.minheap[i])
  }
 }
}

const arr = [9,5,3,7,1,4,7,4,8]

const minheap = new minHeap(arr)
minheap.display()