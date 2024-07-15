function isPalindrome(str) {
  let temp_arr = str.split("");
  let left = 0;
  let right = temp_arr.length - 1;
  while (left <= right) {
    if (temp_arr[left] !== temp_arr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

const str1 = "amanaplanacanalpanama";
const str2 = "awesome";
const str3 = "tacocat";

const result = isPalindrome(str1);
console.log(result);
