const function1 = (string, replaceX) => {
  let replaced = string.replace(/x/i, replaceX)
  return replaced
}
const result1 = function1("Tryber x aqui!", "João");

const array = [
'HTML',
'CSS',
'JavaScript',
'Python',
'Git'
];

const function2 = (a, b) => {
  let orderArray = array.sort(a, b);
  let junction = `${result1} Minhas cinco principais habilidades são:
  ${orderArray}`
  return junction
}
console.log(function2());
