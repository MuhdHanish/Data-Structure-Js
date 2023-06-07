//[6,5,4,3,9,8,0] - find the values need to get sum 
const set = new Set()

const search = (arr,sum) =>{
 for(let i =0 ;i<arr.length;i++){
  if(set.has(sum-arr[i])){
   return [sum-arr[i],arr[i]]
  }else{
   set.add(arr[i])
  }
 }
}

console.log(search([6,5,4,3,9,8,0],10))


//[6,1,6,8,10,4,15,6,3,9,6] - replace 6 into last of array
const arr = [6,1,6,8,10,4,15,6,3,9,6];

const change = (arr,target) =>{
 arr.map((value,idx)=>{
  if(value==target){
   arr.splice(idx,1);
   arr.push(value);
  }
 })
 return arr;
}

console.log(change(arr,6))
