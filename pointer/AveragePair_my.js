function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  while (left < right) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg == avg) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (temp_avg > avg) {
      right--;
    } else {
      left++;
    }
  }
  return result;
}

let result = averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
console.log(result);
