const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

function slidingWindow(arr, num) {
  let pointer1, pointer2, pointer3;
  for (let i = 0; i <= arr.length - num; i++) {
    pointer1 = i;
    pointer2 = pointer1 + 1;
    pointer3 = pointer2 + 1;
    let slidingWindow = [arr[pointer1], arr[pointer2], arr[pointer3]];
    console.log(slidingWindow);
  }
}

slidingWindow(arr, 3);
