//insertion sorting

let arr = [4, 1, 23, 24, 12, 33, 4, 1];


function InsertionSort(arr) {
  let size = arr.length;

  for (let i = 1; i < size; i++) {
    let j = i - 1;
    let elm = arr[i];

    while (j >= 0 && arr[j] > elm) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = elm;
  }
  return arr;
}

console.log(InsertionSort(arr));
