const arr1 = [15, 3, 6, 8, 24, 16];
const arr2 = [11, 3, 9, 6, 15, 8];

function intersection(arr1, arr2) {
  let result = [];
  let counter = {};
  let arr3 = arr1.concat(arr2);

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  Object.keys(counter).forEach((index) => {
    if (counter[index] >= 2) {
      result.push(index);
    }
  });
  return result;
}

const result = intersection(arr1, arr2);
console.log(result);
