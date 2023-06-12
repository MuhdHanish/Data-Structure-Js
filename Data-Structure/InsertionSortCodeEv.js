const insertionSort = (arr) =>{
 for(let i=0;i<arr.length;i++){
  let j = i;
  while (j >= 0 && arr[j - 1] > arr[j]){
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]] 
    j--;
   }
  }
 return arr;
}

console.log(insertionSort([2,6,4,3,7,84,2,6,8]))