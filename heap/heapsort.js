function heapSort(arr) {
  let size = arr.length;

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    heapify(arr, size, i);
  }

  for(let i=size-1;i>0;i--)
  {
    [arr[0],arr[i]]=[arr[i],arr[0]]
    heapify(arr,i,0)
  }

  return arr
}

function heapify(arr, size, root) {
  let left = 2 * root + 1;
  let right = 2 * root + 2;

  let longest = root;

  if (left < size && arr[left] > arr[longest]) {
    longest = left;
  }

  if (right < size && arr[right] > arr[longest]) {
    longest = right;
  }
  if (longest !== root) {
    [arr[root], arr[longest]] = [arr[longest], arr[root]];
    heapify(arr, size, longest);
  }
}

let arr = [3, 2, 5, 6, 1, 0, 4];
console.log(heapSort(arr));
