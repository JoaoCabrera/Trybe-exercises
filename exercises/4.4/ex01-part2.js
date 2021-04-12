function checkPalindromo (str) {
  for (i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    } return true;
  }
}
console.log(checkPalindromo('coisa'));
