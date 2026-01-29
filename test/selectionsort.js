let arr = [4, 3, 1, 45, 42, 2, 1];

function selectionSort(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    let min = i;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr
}
console.log(selectionSort(arr))
