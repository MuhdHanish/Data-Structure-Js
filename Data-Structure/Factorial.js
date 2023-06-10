const factorial = (num) =>{ // O(1)
 let fac = 1; // O(1) 
 for (let i = num; i >= 1; i--) { // O(n)
  fac *= i; // O(1)
 }
 return fac; // O(1)
}

console.log(factorial(0))

// O(n)