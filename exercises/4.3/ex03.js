let n = 5;
let form = '';
let space = '';
for (i = 1; i <= n; i+= 1) {
  space = ' '.repeat(n - i);
  form = '*'.repeat(i);
  console.log(space + form);
}
