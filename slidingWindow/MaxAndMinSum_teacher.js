function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }
  console.log(maxValue);
  return maxValue;
}

function minSum(arr, size) {
  if (arr.length < size) {
    return null;
  }

  let minValue = 0;
  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }

  let tempValue = minValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue < minValue) {
      minValue = tempValue;
    }
  }
  console.log(minValue);
  return minValue;
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28
