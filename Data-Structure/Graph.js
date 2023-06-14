class Graph{
 constructor(){
  this.adjacencyList = {}
 }
 addVertex(vertext){
  if(!this.adjacencyList[vertext]){
   this.adjacencyList[vertext] = new Set();
  }
 }
 addEdge(vertext1,vertext2){
  if(!this.adjacencyList[vertext1]){
   this.addVertex(vertext1)
  }
  if (!this.adjacencyList[vertext2]) {
   this.addVertex(vertext2)
  }
  this.adjacencyList[vertext1].add(vertext2);
  this.adjacencyList[vertext2].add(vertext1);
 }
 hasEdge(vertext1,vertext2){
  return(
   this.adjacencyList[vertext1].has(vertext2)&&
   this.adjacencyList[vertext2].has(vertext1)
  )
 }
 display(){
  for(let vertext in this.adjacencyList){
   console.log(vertext + ' -> ' + [...this.adjacencyList[vertext]])
  }
 }
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A','B');
graph.addEdge('B','C');

graph.display();
console.log(graph.hasEdge('A','C'))