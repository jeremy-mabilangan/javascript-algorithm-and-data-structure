// <------------------- BUBBLE SORT ------------------->
const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  // Big-O = O(n^2)
};

console.log("BUBBLE SORT:");
const arr = [1, 10, 5, 35, 22, -15];
bubbleSort(arr);
console.log(arr); // [-15, 1, 5, 10, 22, 35]
// <------------------- BUBBLE SORT ------------------->

// <------------------- INSERTION SORT ------------------->
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }

  // Big-O = O(n^2)
};

console.log("INSERTION SORT:");
const arr2 = [1, 10, 5, 35, 22, -15];
insertionSort(arr2);
console.log(arr2); // [-15, 1, 5, 10, 22, 35]
// <------------------- INSERTION SORT ------------------->

// <------------------- QUICK SORT ------------------->
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];

  // Worst case = O(n^2)
  // Avg case = O(nlogn)
};

console.log("QUICK SORT:");
const arr3 = [1, 10, 5, 35, 22, -15];
console.log(quickSort(arr3)); // [-15, 1, 5, 10, 22, 35]
// <------------------- QUICK SORT ------------------->

// <------------------- MERGE SORT ------------------->
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
};

// Big-O = O(nlogn)

console.log("MERGE SORT:");
console.log(mergeSort([1, 10, 99, 5, 35, 22, -15])); // [-15, 1, 5, 10, 22, 35, 99]
// <------------------- MERGE SORT ------------------->
