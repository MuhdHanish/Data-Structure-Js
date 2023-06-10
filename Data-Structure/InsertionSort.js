const arr = [45,6,63,5,32,4]

for(let i = 0;i<arr.length;i++){
 let j = i;
 while(j>=0&&arr[j-1]>arr[j]){
  [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
  j--;
 }
}

console.log(arr)