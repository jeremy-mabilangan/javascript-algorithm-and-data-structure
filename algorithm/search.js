// <------------------- LINEAR SEARCH ------------------->
const linearSearch = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) return i;
  }

  return -1;

  // Big-O = O(n)
};

console.log("LINEAR SEARCH:");
console.log(linearSearch([1, 2, 3, 4, 5], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5], 2)); // 1
console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4

// <------------------- LINEAR SEARCH ------------------->

// <------------------- BINARY SEARCH ------------------->
const binarySearch = (numbers, target) => {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === numbers[middleIndex]) {
      return middleIndex;
    }

    if (target < numbers[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;

  // Big-O = O(logn)
};

console.log("BINARY SEARCH:");
console.log(binarySearch([1, 2, 3, 4, 5], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4

// <------------------- BINARY SEARCH ------------------->

// <------------------- RECURSIVE BINARY SEARCH ------------------->
const recursiveBinarySearch = (numbers, target) => {
  return search(numbers, target, 0, numbers.length - 1);
};

const search = (numbers, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === numbers[middleIndex]) {
    return middleIndex;
  }

  if (target < numbers[middleIndex]) {
    return search(numbers, target, leftIndex, middleIndex - 1);
  } else {
    return search(numbers, target, middleIndex + 1, rightIndex);
  }
};

// Big-O = O(logn)

console.log("RECURSIVE BINARY SEARCH:");
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 0)); // -1
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 5)); // 4

// <------------------- RECURSIVE BINARY SEARCH ------------------->
