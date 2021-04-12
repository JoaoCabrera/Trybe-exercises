function biggerIndex (array) {
  let smaller = array[0];
  for (i = array[0]; i < array.length; i += 1) {
    if (array[i] < smaller) {
      smaller = i
    }
  } return smaller
}
console.log(biggerIndex([2, 4, 6, 7, 10, 0, -3]));
