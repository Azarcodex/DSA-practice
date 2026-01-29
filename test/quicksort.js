let arr = [7, 4, 5, 2, 1, 3, 6];

function partition(arr, left, right) {
  let pivot = arr[left];

  let i = left + 1;
  let j = right;

  while (true) {
    while (i < j && arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i >= j) break;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[left], arr[j]] = [arr[j], arr[left]];
}
