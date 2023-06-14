class Graph {
 constructor(){
  this.graph = new Map();
 }
 addVertex=(vertex)=>{
  this.graph.set(vertex,new Set());
 }
 insert=(vertex,edge,isBi)=>{
  if(!this.graph.has(vertex)){
    this.addVertex(vertex);
  }
  if(!this.graph.has(edge)){
   this.addVertex(edge);
  }
  this.graph.get(vertex).add(edge);
  if(isBi){
   this.graph.get(edge).add(vertex);
  }
 }
 display=()=>{
  for(let key of this.graph.keys()){
   for(let value of this.graph.get(key)){
    console.log(`${key} -> ${value}`)
   }
  }
 }
 dfs=(vertex)=>{
  const visited = new Set();
  return this.dfsHelper(vertex,visited)
 }
 dfsHelper =(vertex,visited) =>{
  visited.add(vertex);
  console.log(vertex)
  const neighbours = this.graph.get(vertex);
  for(let neighbour of neighbours){
   if(!visited.has(neighbour)){
    this.dfsHelper(neighbour,visited)
   }
  }
 } 
 bfs=(vertex)=>{
  const visited = new Set();
  const queue = [vertex];
  visited.add(vertex);
  while(queue.length>0){
   const vertex = queue.shift();
   console.log(vertex);
   const neighbours = this.graph.get(vertex);
   for(let neighbour of neighbours){
    if(!visited.has(neighbour)){
     visited.add(neighbour);
     queue.push(neighbour)
    }
   }
  }
 }
}

const graph = new Graph();
graph.insert('A','B',true);
graph.insert('B', 'C', true);
graph.insert('C','Z',false);
graph.display();
graph.dfs('A')
console.log('--------')
graph.bfs('A')