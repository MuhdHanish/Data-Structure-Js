// Linear search 
// [1,2,3,4,5,6,7,8,9,10] - find 5
// O(n)T 
const linearSearch = (arr,target) =>{
 for(let i =0;i<arr.length;i++){
  if(arr[i]==target){
   return i;
  }
 }
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10],5));