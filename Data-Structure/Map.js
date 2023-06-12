const map = new Map([['a',1],['b',2]]);
map.set('c',3);

for (let [key, value] of map) {
 console.log(`${key}: ${value}`)
}

console.log(map.get('b'))
map.set('z',4)
console.log(map.has('a'))
map.delete('b')
console.log(map.has('b'))

map.clear()

for (let [key, value] of map) {
 console.log(`${key}: ${value}`)
}
