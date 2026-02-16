class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
    }
  }

  addEdge(v1,v2)
  {
    this.adjList[v1].push(v2)
    this.adjList[v2].push(v1)
  }
}


let g=new Graph()

g.addVertex("X")
g.addVertex("Y")
g.addVertex("Z")
g.addVertex("W")

g.addEdge("X","Y")
g.addEdge("X","Z")

g.addEdge("Y","W")
g.addEdge("Z","W")

console.log(g)