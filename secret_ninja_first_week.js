// PW2.01.06 - Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

// Example
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// PW2.01.07 - Integer to Roman
// Given an integer, convert it to a Roman numeral.

function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let roman = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      roman += symbols[i];
    }
  }
  return roman;
}

// Example
console.log(intToRoman(3)); // Output: "III"
console.log(intToRoman(58)); // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"

// PW2.01.08 - Roman to Integer
// Given a Roman numeral string, convert it to an integer.

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanMap[s[i]];
    let next = romanMap[s[i + 1]];

    if (next > current) {
      total += next - current;
      i++; // Skip next character
    } else {
      total += current;
    }
  }
  return total;
}

// Example
console.log(romanToInt("III")); // Output:

// PW2.01.09 - Longest Common Prefix
// Find the longest common prefix string among an array of strings.

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

// Example
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

// PW2.01.10 - Valid Parentheses
// Given a string containing '()[]{}', determine if it is valid.

function isValid(s) {
  const stack = [];
  const mapping = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (mapping[char]) {
      let topElement = stack.length ? stack.pop() : "#";
      if (topElement !== mapping[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// Example
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
