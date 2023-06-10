const fibannaci = (n) =>{  // O(1)
 const fib = [0, 1];      // O(1)
 for(let i =2;i<n;i++){  // O(n)
  fib[i] = fib[i - 1] + fib[i - 2]; // O(1)
 }
 return fib; // O(1)
}

console.log(fibannaci(7))

// O(n)