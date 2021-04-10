let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let total = 0;
for (i = 0; i < numbers.length; i += 1) {
  sum = numbers[i];
  total = total + sum;
}
let average = total / 10;
if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor que 20');
}
