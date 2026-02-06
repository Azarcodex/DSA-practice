// searching,inserting,deleting

let table = [];

function hash(key) {
  return key.length;
}

function insert(key, val) {
  let index = hash(key);
  if (!table[index]) {
    table[index] = [];
  }
  for (let i of table[index]) {
    if (i[0] === key) {
      i[1] = val;
      return;
    }
  }

  table[index].push([key, val]);
}

function get(key) {
  let index = hash(key);

  if (!table[index]) return undefined;

  for (let i of table[index]) {
    if (i[0] === key) {
      return i[1];
    }
  }
}

function has(key) {
  let index = hash(key);

  if (!table[index]) return false;

  for (let i of table[index]) {
    if (i[0] === key) return true;
  }
  return false;
}

function printing() {
  let res = [];
  for (let bucket of table) {
    if (bucket) {
      for (let pair of bucket) {
        res.push(pair[1]);
      }
    }
  }
  return res;
}

function printingKeys() {
  let res = [];
  for (let bucket of table) {
    if (bucket) {
      for (let pair of bucket) {
        res.push(pair[0]);
      }
    }
  }
  return res;
}

insert("name", "sana");
insert("age", 21);

console.log(has("name"));
console.log(has("jjj"));
console.log("the values are");
console.log(printing());
console.log("the keys are");
console.log(printingKeys());
