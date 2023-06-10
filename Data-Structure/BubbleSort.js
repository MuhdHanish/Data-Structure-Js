const arr = [3, 6, 4, 2, 5, 7, 9];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr); // Output: [2, 3, 4, 5, 6, 7, 9]
