let arr = [4, 5, 2, 1, 3];
//Lomuto Partition

function Partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left<right)
    {
        let p=Partition(arr,left,right)
        quickSort(arr,left,p-1)
        quickSort(arr,p+1,right)
    }
    return arr
}

console.log(quickSort(arr))
