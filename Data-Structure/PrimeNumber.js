
const checkPrime = (num) =>{ // O(1)

 if (num == 1) return false // O(n)
 for (i = 2; i < Math.sqrt(num); i++) { // O(sqrt(n))

  if (num % i == 0) { // O(1)
   return false; // O(1)
  }
 }
 return true; // O(1)
}

console.log(checkPrime(1))


//O(sqrt(n))


