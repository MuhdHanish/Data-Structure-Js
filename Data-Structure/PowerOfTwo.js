

// const powerOfTwo = (num) =>{ // O(1)
//  while (num >= 0) { // O(logn) reducing the number half
//   num /= 2; // O(1)
//   if (num == 1) {// O(1)
//    return true; // O(1)
//   } else if (num < 1) { // O(1)
//    return false; // O(1)
//   }
//  }
// }

// console.log(powerOfTwo(8))

// O(logn)

const powerOfTwoBitWise = (num) => { // O(1)
 if (num < 1) { // O(1)
  return false; // O(1)
 }
 return (num & (num - 1)) === 0; // O(1)
}

console.log(powerOfTwoBitWise(3))