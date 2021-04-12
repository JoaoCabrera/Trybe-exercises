function moreRepeat (array) {
  let count = 0;
  let count2 = 0;
  let repeat = 0;
  for (i = 0; i < array.length; i += 1) {
    for (c = 0; c < array.length; c += 1) {
      if (array[c] === array[i]) {
        count += 1;
      }
      if (count2 < count) {
        count2 = count;
        repeat = array[i];
      }
    }
    return repeat;
  }
}
console.log(moreRepeat([2, 3, 2, 5, 8, 2, 3]));
