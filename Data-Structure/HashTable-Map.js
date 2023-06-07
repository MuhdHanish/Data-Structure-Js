// HashTable - Map

// Intialize O(1) TS
// Set O(1) TS
// Get O(1) TS
// Delete O(1) TS
// Travers O(n) TS
// Print O(n) TS


const map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

console.log(map.get('a'))
console.log(map.has('a'))
console.log(map.delete('a'))
console.log(map.has('a'))
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
map.clear()
console.log(map.size)


