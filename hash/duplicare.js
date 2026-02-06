let arr = [3, 3, 1, 3, 45, 1, 5, 6];

//find number of unique 4

// let map = new Map();
// let count = 0;
// for (let i of arr) {
//   if (!map.has(i)) {
//     count++;
//     map.set(i, true);
//   }
// }
// console.log(map.values())
// console.log(count)

//find the unique elements

let map = new Map();

for (let val of arr) {
  map.set(val, (map.get(val) || 0) + 1);
}

let res = [];
for (let val of map) {
  if (val[1] === 1) {
    res.push(val[0]);
  }
}

console.log(res);
