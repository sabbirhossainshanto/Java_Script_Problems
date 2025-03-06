/**
 * Question:
 * Given a zero-based permutation `nums`, build an array `ans`
 * where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
 */

const buildArray = (nums) => {
  return nums.map((num) => nums[num]);
};

// Answer:
console.log(buildArray([0, 2, 1, 5, 3, 4])); // Output: [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // Output: [4,5,0,1,2,3]

/**
 * Question:
 * Given an integer array `nums` of length `n`, create an array `ans` of length `2n`
 * where:
 * ans[i] == nums[i]
 * ans[i + n] == nums[i] for 0 <= i < n
 * Return the array `ans`.
 */

const getConcatenation = (nums) => {
  return [...nums, ...nums];
};

// Answer:
console.log(getConcatenation([1, 2, 1])); // Output: [1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); // Output: [1,3,2,1,1,3,2,1]

/**
 * Question:
 * Given an array of integers `nums`, return the number of **good pairs**.
 * A pair (i, j) is called **good** if nums[i] == nums[j] and i < j.
 */

const numIdenticalPairs = (nums) => {
  let count = 0;
  let freq = {};

  for (let num of nums) {
    if (freq[num]) {
      count += freq[num];
    }
    freq[num] = (freq[num] || 0) + 1;
  }

  return count;
};

// Answer:
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // Output: 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // Output: 6
console.log(numIdenticalPairs([1, 2, 3])); // Output: 0

/**
 * Question:
 * Given an array of strings `operations`, each representing an operation on a variable `X`
 * where:
 * "++X" or "X++" increments `X` by 1
 * "--X" or "X--" decrements `X` by 1
 * Initially, `X = 0`. Return the final value of `X` after all operations.
 */

const finalValueAfterOperations = (operations) => {
  let X = 0;
  for (let op of operations) {
    if (op.includes("++")) X++;
    else X--;
  }
  return X;
};

// Answer:
console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // Output: 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // Output: 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // Output: 0

/**
 * Question:
 * Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`,
 * Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.
 */

const shuffle = (nums, n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};

// Answer:
console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // Output: [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // Output: [1,4,2,3,3,2,4,1]
console.log(shuffle([1, 1, 2, 2], 2)); // Output: [1,2,1,2]
