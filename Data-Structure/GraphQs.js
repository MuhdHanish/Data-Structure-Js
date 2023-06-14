class Graph {
 constructor(){
  this.adjacancyList = {}
 }
 addVertex = (vertex) =>{
  if(!this.adjacancyList[vertex]){
   this.adjacancyList[vertex]=new Set;
  }
 }
 addEdge = (vertex1,vertex2) =>{
  if(!this.adjacancyList[vertex1]){
   this.addVertex(vertex1)
  }
  if (!this.adjacancyList[vertex2]) {
   this.addVertex(vertex2)
  }
  this.adjacancyList[vertex1].add(vertex2)
  this.adjacancyList[vertex2].add(vertex1)
 }
 removeEdge = (vertex1,vertex2) =>{
  if(this.adjacancyList[vertex1]&&this.adjacancyList[vertex2]){
   this.adjacancyList[vertex1].delete(vertex2)
   this.adjacancyList[vertex2].delete(vertex1)
  }
 }
 removeVertex = (vertex) =>{
  if(this.adjacancyList[vertex]){
   for(let edge of this.adjacancyList[vertex]){
    this.adjacancyList[edge].delete(vertex)
   }
   delete this.adjacancyList[vertex]
  }
 }
 hasEdge = (vertex1,vertex2) =>{
  if(this.adjacancyList[vertex1]&&this.adjacancyList[vertex2]){
   return (
    this.adjacancyList[vertex1].has(vertex2)&&this.adjacancyList[vertex2].has(vertex1)
   )
  }else{
   return false;
  }
 }
 getEdges =(vertex) =>{
  if(this.adjacancyList[vertex]){
    let edges = '';
    for(let edge of this.adjacancyList[vertex]){
     edges += `${edge} `
    }
    return edges;
  }else{
   return -1;
  }
 }
 display = () =>{
  for(let vertex in this.adjacancyList) {
   console.log(`${vertex} -> ${[...this.adjacancyList[vertex]]}`)
  }
 }
}

const graph = new Graph ();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C');

graph.addEdge('A','C');
graph.addEdge('A','B');
console.log(graph.hasEdge('A','C'))

graph.display();
console.log("edges of A -",graph.getEdges('A'))

graph.removeVertex('A');
console.log(graph.hasEdge('A', 'C'))

graph.display();