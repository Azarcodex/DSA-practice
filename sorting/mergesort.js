//merge sorting

function mergeSort(arr, left, right) {
  if (left >= right) return;

  let mid = Math.floor(left + (right - left) / 2);

  mergeSort(arr, left, mid );
  mergeSort(arr, mid + 1, right);

  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let left_Arr = new Array(n1);
  let right_Arr = new Array(n2);

  for (let i = 0; i < n1; i++) {
    left_Arr[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    right_Arr[j] = arr[mid + 1 + j];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    if (left_Arr[i] <= right_Arr[j]) {
      arr[k] = left_Arr[i];
      i++;
    } else {
      arr[k] = right_Arr[j];
      j++
    }
    k++;
  }

  while (i < n1) {
    arr[k] = left_Arr[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = right_Arr[j];
    j++;
    k++;
  }
}

const arr = [38, 27, 43, 10];

// Start merge sort on full array
mergeSort(arr, 0, arr.length - 1);

// Output the sorted array
console.log(arr);
