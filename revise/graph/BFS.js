//       A
//      / \
//     B   C
//    /     \
//   D       E

// A-[B,C]
// B-[A,D]
// C-[A,E]

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

  BFS(start) {
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

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");

console.log(g.BFS("A"));
