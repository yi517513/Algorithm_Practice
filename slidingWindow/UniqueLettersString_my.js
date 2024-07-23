// 缺少判斷沒有的情況 ， maxLength = -Infinity

const str = "thisishowwedoit";

function uniqueLetterString(str) {
  let arr = str.split("");
  let left = 0;
  let right = 0;
  let maxLength = -Infinity;
  let tempLength = 0;
  let counter = {};

  while (right < arr.length) {
    if (!counter[arr[right]]) {
      counter[arr[right]] = 1;
    } else {
      counter[arr[right]] += 1;
    }

    while (counter[arr[right]] > 1) {
      tempLength = right - left + 1;
      if (tempLength > maxLength) {
        maxLength = tempLength;
      }

      counter[arr[left]] -= 1;
      left++;
    }

    right++;
  }

  if (maxLength == -Infinity) {
    console.log("Cannot find unique letters substring.");
    return null;
  } else {
    console.log(maxLength);
    return maxLength;
  }
}

uniqueLetterString(str); // 6
