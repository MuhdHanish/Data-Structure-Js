// String

// Get O(1) TS
// Set O(1) TS
// Initialize O(n) TS
// Travers   O(n) TS 
// Delete  O(n) TS
// Print O(n) TS


const strinChanger = (str, key) => {
 const newKey = key % 26;
 const newLetters = [];
 for (let i = 0; i < str.length; i++) {
  let letterPos = str.charCodeAt(i) + newKey;
  if (letterPos <= 122) {
   newLetters[i] = String.fromCharCode(letterPos)
  }else{
   newLetters[i] = String.fromCharCode(96 + (letterPos % 122));
  }
 }
 return newLetters.join('')
}
console.log(strinChanger('xyz', 2));