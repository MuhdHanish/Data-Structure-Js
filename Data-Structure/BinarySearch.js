// Binary Search

// Binary Search is a searching algorithm that works on a sorted array.
// It uses the concept of divide and conquer to find a value in an array.
// It compares the middle element of the array with our target element.
// If the target element is equal to the middle element, then we return the index of the middle element.
// If the target element is less than the middle element, then we search for the target element in the left subarray.
// If the target element is greater than the middle element, then we search for the target element in the right subarray.
// We repeat this process until we find the target element or until the subarray has no element left.
// Binary Search is a very efficient searching algorithm with a time complexity of O(log n).
// Binary Search is a recursive algorithm.
// Binary Search is faster than Linear Search.
// Binary Search only works on a sorted array.

// [1,2,3,4,5,6,7,8,9,10] - find 5

// O(log n)T

const binarySearch = (arr,target) =>{
 let leftIdx = 0;
 let rightIdx = arr.length-1;
 while(leftIdx<=rightIdx){
  let midIdx = Math.floor((leftIdx+rightIdx)/2);
  if(arr[midIdx]==target){
   return midIdx;
  }else if(arr[midIdx]<target){
   leftIdx = midIdx+1;
  }else{
   rightIdx = midIdx-1;
  }
 }
 return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],5));


// Recrusive
const binarySearchRecursion = (arr,target) =>{
 return search (arr,target,0,arr.length-1)
}

const search = (arr,target,leftIdx,rightIdx) =>{
 if(leftIdx>rightIdx){
  return -1;
 }
 let midIdx = Math.floor((leftIdx+rightIdx)/2);
 if(arr[midIdx]==target){
  return midIdx;
 }else if(arr[midIdx]<target){
  return search(arr,target,midIdx+1,rightIdx);
 }else{
  return search(arr,target,leftIdx,midIdx-1);
 }
}

console.log(binarySearchRecursion([1,2,3,4,5,6,7,8,9,10],5));