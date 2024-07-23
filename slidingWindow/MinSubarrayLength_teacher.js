function minSubLength(arr, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum >= sum) {
      // update the value of minLength
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= arr[left];
      left++;
    }
    right++;
  }

  if (minLength == Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11));
