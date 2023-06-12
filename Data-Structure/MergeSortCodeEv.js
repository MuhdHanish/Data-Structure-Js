const mergeSortHelper = (arr) =>{
  if(arr.length<2){
    return arr;
  }
  let midIdx = Math.floor((arr.length)/2);
  let left = arr.slice(0,midIdx)
  let right = arr.slice(midIdx)
  return mergeSort(mergeSortHelper(left),mergeSortHelper(right))
}

const mergeSort = (left,right) =>{
 let newArr = [];
 while(left.length&&right.length){
  if(left[0]<right[0]){
    newArr.push(left.shift())
  }else{
    newArr.push(right.shift())
  }
 }
 return [...newArr,...left,...right]
}

console.log(mergeSortHelper([3,4,2,5,4,6,5,7,8,9]))

// Worst Case O(nlogn)
// this is the best time complexity when sorting 
