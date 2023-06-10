const arr = [46,4,7,4,2,5,8]

const quickSort =(arr) =>{
 if(arr.length<=1){
  return arr;
 }
 let pivot = arr[arr.length-1]
 let left = []
 let right =[]
 for(let i=0;i<arr.length-1;i++){
  if(arr[i]<pivot){
   left.push(arr[i])
  }else{
   right.push(arr[i])
  }
 }
 return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr))