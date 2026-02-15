//Insertion,Printing,Searching

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  Insert(str) {
    let current = this.root;

    for (let i of str) {
      if (!current.children[i]) {
        current.children[i] = new TrieNode();
      }
      current = current.children[i];
    }
    current.endOfWord = true;
  }
  printing() {
    let res = [];
    function dfs(node, current) {
      if (node.endOfWord) {
        res.push(current);
      }

      for (let i in node.children) {
        dfs(node.children[i], current + i);
      }
    }

    dfs(this.root, "");
    return res;
  }
  Searching(item) {
    let current = this.root;

    for (let i of item) {
      if (!current.children[i]) {
        return false;
      }
      current = current.children[i];
    }

    return current.endOfWord
  }
}

let trie = new Trie();

trie.Insert("hello");
trie.Insert("hai");
trie.Insert("bubble");

console.log(trie.printing());
console.log(trie.Searching("hrai"))
