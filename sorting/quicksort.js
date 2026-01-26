let arr = [12, 4, 3, 23, 13, 2];

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
  return arr
}

function partition(arr, low, high) {
  let pivot = arr[low];

  let i = low + 1;
  let j = high;

  while (true) {
    while (i <= high && arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i >= j) break;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];

}
console.log(quickSort(arr))
