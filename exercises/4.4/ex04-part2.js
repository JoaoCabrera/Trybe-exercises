function biggerName (array) {
  let bigger = array[0];
  for (i = 1; i < array.length; i += 1) {
    if (array[i].length > bigger.length) {
      bigger = array[i];
    }
  } return (bigger);
}
console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
