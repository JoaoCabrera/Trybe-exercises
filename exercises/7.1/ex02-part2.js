const longestWord = (string)  => {
  let strSplit = string.split(' ');
  let initial = strSplit[0];
  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i].length > initial.length) {
      initial = strSplit[i];
    }
  }
  return initial
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
