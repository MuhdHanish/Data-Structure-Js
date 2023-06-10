const factorial = (num) =>{
 let fac = 1;
 for(let i =num;i>=1;i--){
  fac *= i;
 }
 return fac;
}

console.log(factorial(4))