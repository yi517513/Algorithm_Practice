function sameFrequency(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!counter1[str1[i]]) {
      counter1[str1[i]] = 1;
    } else {
      counter1[str1[i]]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!counter2[str2[i]]) {
      counter2[str2[i]] = 1;
    } else {
      counter2[str2[i]]++;
    }
  }

  for (let key in counter1) {
    if (!counter2[key]) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }

  return true;
}

const str1 = "abbad";
const str2 = "ababc";

const result = sameFrequency(str1, str2);
console.log(result);
