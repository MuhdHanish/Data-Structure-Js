const arr = [3,6,3,5,7,2,1,56,89]

const merge = (arr) =>{
 if(arr.length<=1){
  return arr
 }
 let mid = Math.floor((arr.length)/2)
 let left = arr.slice(0,mid)
 let right = arr.slice(mid)
 return  Sort(merge(left),merge(right))
}

const Sort = (left,right) =>{
 let newArr = []
 while(left.length&&right.length){
  if(left[0]<right[0]){
   newArr.push(left.shift())
  }else{
   newArr.push(right.shift())
  }
 }
 return [...newArr,...left,...right]
}

console.log(merge(arr))