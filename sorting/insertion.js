//insertion sort

let arr = [5, 4, 3, 2, 1];

function insertionSort(arr) {
  let size = arr.length - 1;

  for (let i = 1; i <= size; i++) {
    let item = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = item;
  }
  console.log(arr);
}

insertionSort(arr);
