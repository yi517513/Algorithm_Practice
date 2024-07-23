// 少了arr.length < num 時的判斷
// MaxAndMinSum1錯誤，參照老師的
// MaxAndMinSum2 O(n * num)

class MaxAndMinSum1 {
  maxSum(arr, num) {
    let pointer1, pointer2, pointer3;
    let max = 0;

    if (num > arr.length) {
      return null;
    }

    for (let i = 0; i <= arr.length - num; i++) {
      pointer1 = i;
      pointer2 = pointer1 + 1;
      pointer3 = pointer2 + 1;

      let slidingSum = arr[pointer1] + arr[pointer2] + arr[pointer3];

      if (slidingSum > max) {
        max = slidingSum;
      }
    }
    console.log(max);
    return;
  }

  minSum(arr, num) {
    let pointer1, pointer2, pointer3;
    let min = 0;

    if (num > arr.length) {
      return null;
    }

    for (let i = 0; i <= arr.length - num; i++) {
      pointer1 = i;
      pointer2 = pointer1 + 1;
      pointer3 = pointer2 + 1;

      let slidingSum = arr[pointer1] + arr[pointer2] + arr[pointer3];

      if (slidingSum < min) {
        min = slidingSum;
      }
    }
    console.log(min);
    return;
  }
}

class MaxAndMinSum2 {
  maxSum(arr, num) {
    let left = 0;
    let right = num - 1;
    let currentSum;
    let maxSum = -Infinity;

    if (arr.length < num) {
      console.log(null);
      return null;
    }

    while (right < arr.length) {
      currentSum = 0;

      for (let i = left; i < right; i++) {
        currentSum += arr[i];
      }
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }

      left++;
      right++;
    }
    console.log(maxSum);
    return maxSum;
  }

  minSum(arr, num) {
    let left = 0;
    let right = num - 1;
    let currentSum;
    let minSum = Infinity;

    if (arr.length < num) {
      console.log(null);
      return null;
    }

    while (right < arr.length) {
      currentSum = 0;

      for (let i = left; i < right; i++) {
        currentSum += arr[i];
      }
      if (currentSum < minSum) {
        minSum = currentSum;
      }

      left++;
      right++;
    }
    console.log(minSum);
    return minSum;
  }
}

const reuslt1 = new MaxAndMinSum1();
const reuslt2 = new MaxAndMinSum1();

reuslt1.maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
reuslt1.minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

reuslt2.maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
reuslt2.minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
