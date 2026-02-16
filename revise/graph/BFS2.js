class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
    }
  }
  addEdge(e1, e2) {
    this.adjList[e1].push(e2);
    this.adjList[e2].push(e1);
  }
  bfs(start) {
    let queue = [start];
    let visited = new Set();
    let res = [];
    visited.add(start);

    while (queue.length > 0) {
      let node = queue.shift();
      res.push(node);

      for (let i of this.adjList[node]) {
        if (!visited.has(i)) {
          visited.add(i);
          queue.push(i);
        }
      }
    }
    return res;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");


console.log(graph)
console.log(graph.bfs("A"));
