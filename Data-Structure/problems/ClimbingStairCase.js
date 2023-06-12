const climbingStairCase = (n) =>{
 const numberOfWays = [1,2];
 for(let i=2;i<n;i++){
  numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2]
 }
 return numberOfWays[n-1]
}

console.log(climbingStairCase(5))