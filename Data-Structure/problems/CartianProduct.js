const arr1 = [1,2];
const arr2 = [3,4];

const product = (arr1,arr2) =>{
 const product = [];
 for(let i =0;i<arr1.length;i++){
  for(let j=0;j<arr2.length;j++){
   product.push([arr1[i],arr2[j]])
  }
 }
 return product;
}

console.log(product(arr1,arr2))

// complexity is calculated on eact array's length
// if the first array length = m
// second array length = n
// complexity O(mn)

// if both arrays length are same then O(n^2)