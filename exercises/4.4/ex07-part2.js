function compareString (word, ending) {
  let count = word.length - ending.length
  let final = ''
  for (i = count; i < word.length; i += 1) {
    final += word[i]
  }
  if (final === ending) {
    return true;
  } return false;
}
console.log(compareString('joaofernando', 'fernan'));
