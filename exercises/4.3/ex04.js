let n = 5;
let form = '';
let rule = n / 2;
let space = '';
for (i = 1; i <= n; i += 2) {
  space = ' '.repeat(rule);
  form = '*'.repeat(i);
  console.log(space + form);
  rule -= 1;
}
