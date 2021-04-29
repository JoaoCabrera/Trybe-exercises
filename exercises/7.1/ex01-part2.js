const factorial = (num) => (
  num >= 2 ? num * factorial(num - 1) : 1
);
console.log(factorial(6));
