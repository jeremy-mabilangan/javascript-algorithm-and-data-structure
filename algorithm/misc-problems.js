// <------------------- CARTESIAN PRODUCT ------------------->
const cartesianProduct = (arr1, arr2) => {
  const cartesianProduct = [];

  for (let i = 0; i < arr1.length; i++) {
    let j = 0;
    while (j < arr2.length) {
      cartesianProduct.push([arr1[i], arr2[j]]);
      j++;
    }
  }

  return cartesianProduct;
  // Big-O = O(mn)
};

console.log("CARTESIAN PRODUCT:");
console.log(cartesianProduct([1, 2], [3, 4])); // [[1, 3], [1, 4], [2, 3], [2, 4]]
console.log(cartesianProduct([1, 2], [3, 4, 5])); // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]
// <------------------- CARTESIAN PRODUCT ------------------->

// <------------------- CLIMBING STAIRCASE ------------------->
const climbingStairCase = (n) => {
  const noOfWays = [1, 2];

  for (let i = 2; i < n; i++) {
    console.log(noOfWays);
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    console.log(`index ${i} = ${noOfWays[i - 1] + noOfWays[i - 2]}`);
    console.log(noOfWays);
  }
  return noOfWays[n - 1];
  // Big-O = O(n)
};

console.log("CLIMBING STAIRCASE:");
console.log(climbingStairCase(1)); // 1
console.log(climbingStairCase(2)); // 2
console.log(climbingStairCase(3)); // 3
console.log(climbingStairCase(4)); // 5
console.log(climbingStairCase(5)); // 8
// <------------------- CARTESIAN PRODUCT ------------------->

// <------------------- TOWER OF HANOI ------------------->
const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Mode disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Mode disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
  // Big-O = O(2^n)
};

console.log("TOWER OF HANOI:");
towerOfHanoi(3, "A", "C", "B");
// <------------------- TOWER OF HANOI ------------------->
