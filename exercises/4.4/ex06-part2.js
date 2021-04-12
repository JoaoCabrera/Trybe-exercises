function summation (n) {
  sum = 0;
  for (i = 0; i <= n; i += 1) {
    sum = sum + i
  } 
  return sum
}
console.log(summation(5));
