// *
// 缺少題目要求的，若找不到符合的就要return 0 ， 將minLenght預設為Infinity
// 寫的不夠簡潔直觀，請參考老師的

function minSubLength(arr, target) {
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let tempLength = 0;
  let sum = arr[left];

  while (right < arr.length) {
    if (sum >= target) {
      tempLength = right - left + 1;
      if (tempLength < minLength) {
        minLength = tempLength;
      }
      sum = sum - arr[left];
      left += 1;
    } else {
      right += 1;
      sum = sum + arr[right];
    }
  }

  if (minLength == Infinity) {
    console.log(0);
    return 0;
  } else {
    console.log(minLength);
    return minLength;
  }
}

minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); // 2
