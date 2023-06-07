const arr = [1,2,3,4,5]; // initalization
console.log(arr);
//O(n) TS

arr[0] = 10; //set
console.log(arr);
//O(1) TS

console.log(arr[0]); //get
//O(1) TS

arr.push(6); //insert in last
console.log(arr);
//O(1) TS

arr.pop(); //delete from last
console.log(arr);
//O(1) TS

arr.unshift(0); //insert in first
console.log(arr);
//O(n) TS

arr.shift(); //delete from first
console.log(arr);
//O(n) TS

arr.splice(2,0,2.5); //insert at index 2
console.log(arr);
//O(n) TS

arr.splice(2,1); //delete at index 2
console.log(arr);
//O(n) TS

arr.splice(2,1,2.5); //replace at index 2
console.log(arr);
//O(n) TS

arr.forEach(el=>console.log(el)); //travers
//O(n) TS

arr.reverse(); //reverse
console.log(arr);
//O(n) TS

arr.sort(); //sort
console.log(arr);
//O(nlogn) TS

arr.sort((a,b) => a-b); //sort
console.log(arr);
//O(nlogn) TS

arr.sort((a,b) => b-a); //sort
console.log(arr);
//O(nlogn) TS

// Dynamic array
// after fill up the size that create a the double size of array
// O(n) TS