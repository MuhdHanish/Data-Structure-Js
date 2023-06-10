const obj = {
 name:'Hanish',
 age:18,
 place:'Palakkad',
 state:'Kerala',
}

console.log(obj.name); // Access O(1)
obj.country = 'india'; // Insert O(1)
delete obj.age; // Delete O(1)

// Search O(n)
console.log(Object.keys(obj)) // O(n)
console.log(Object.values(obj)) // O(n)