// 沒考慮到空字串的情況。寫的不好看，參照老師的

function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    return true;
  }

  let str1Pointer = 0;
  let str2Pointer = 0;
  let counter = 0;

  while (str1Pointer < str1.length && str2Pointer < str2.length) {
    if (str1[str1Pointer] !== str2[str2Pointer]) {
      str2Pointer++;
    } else {
      counter++;
      str1Pointer++;
      str2Pointer++;
      if (counter == str1.length) {
        return true;
      }
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello Dear"));
console.log(isSubsequence("book", "brooklyn"));
console.log(isSubsequence("abc", "bac"));
console.log(isSubsequence("", "anystring")); // true (考慮空字串)
