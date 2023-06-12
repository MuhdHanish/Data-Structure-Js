const linearSearch = (arr,target,idx) =>{
 if(arr[idx]===target){
  return idx
 }else if (arr.length-1===idx){
  return -1
 }
 return linearSearch(arr,target,idx+1)
}
const linearSearchHelper = (arr,target)=>{
return linearSearch(arr,target,0)
}
console.log(linearSearchHelper([4,6,2,7,4,8,63],4))