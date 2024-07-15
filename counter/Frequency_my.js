// 沒考慮到長短不同的情況

function sameFrequency(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter = {};
  for (let i = 0; i < str1.length; i++) {
    if (!counter[str1[i]]) {
      counter[str1[i]] = 1;
    } else {
      counter[str1[i]] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!counter[str2[i]]) {
      counter[str2[i]] = 1;
    } else {
      counter[str2[i]] -= 1;
    }
  }

  return Object.values(counter).every((value) => value == 0);
}

const str1 = "abba";
const str2 = "abab";

const result = sameFrequency(str1, str2);
console.log(result);
