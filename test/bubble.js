let arr = [4, 2, 1, 5, 6, 3];

function bubbleSort(arr) {
  let size = arr.length - 1;

  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size - i; j++) {
      if (arr[j] >= arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
