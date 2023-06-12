const binarySearch = (arr, target, leftIdx, rightIdx) => {
 if(leftIdx>rightIdx){
  return -1;
 }
 let midIdx = Math.floor((leftIdx + rightIdx) / 2);
 if (arr[midIdx] === target) {
  return midIdx;
 }else if (arr[midIdx] < target) {
  return binarySearch(arr,target,midIdx+1,rightIdx)
 }else{
  return binarySearch(arr,target,leftIdx,midIdx-1)
 }
}

const binarySearchHelper = (arr,target) =>{
 return binarySearch(arr,target,0,arr.length-1)
}

console.log(binarySearchHelper([1,2,3,4,5,6,7,8],0))