function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let temp = new Array(arr.length);
  sort(arr, temp, 0, arr.length - 1);
  return arr;
}

function sort(arr, temp, left, right) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);
  sort(arr, temp, left, mid);
  sort(arr, temp, mid + 1, right);
  merge(arr, temp, left, mid, right);
}

function merge(arr, temp, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) temp[k++] = arr[i++];

  while (j <= right) temp[k++] = arr[j++];
}
