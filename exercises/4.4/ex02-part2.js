function biggerIndex (array) {
  let bigger = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] > bigger) {
      bigger = i
    }
  } return bigger
}
console.log(biggerIndex([2, 3, 6, 7, 10, 1]));
