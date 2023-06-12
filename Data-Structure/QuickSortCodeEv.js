const quickSort = (arr) => {
 if(arr.length<2){
  return arr
 }
 let pivet = arr[arr.length-1]; 
 let left = [];
 let right = [];
 for(let i=0;i<arr.length-1;i++){
  if(arr[i]<pivet){
   left.push(arr[i])
  }else{
   right.push(arr[i])
  }
 }
 return [...quickSort(left),pivet,...quickSort(right)]
}

// avarage O(nlogn) because it make subarrays
// worst case O(n^2) on some case in that case take a good pivet 