let wage = 3000;
let inss = 0;
let ir = 0;
if (wage <= 1556.94) {
  inss = (wage * 8) / 100;
  wage = wage - inss.toFixed(2);
} else if (wage <= 2594.92) {
  inss = (wage * 9) / 100;
  wage = wage - inss.toFixed(2);
} else if (wage <= 5189.92) {
  inss = (wage * 11) / 100;
  wage = wage - inss.toFixed(2);
} else {
  wage = wage - 570.88;
}
if (wage <= 1903.98) {
  ir = 0;
  console.log(wage - ir);
} else if (wage <= 2826.55) {
  ir = ((wage * 7.5) / 100) - 142.80;
  console.log (wage - ir);
} else if (wage <= 3751.05) {
  ir = ((wage * 15) / 100) - 354.80;
  console.log (wage - ir);
} else if (wage <= 4664.68) {
  ir = ((wage * 22.5) / 100) - 636.13;
  console.log(wage - ir);
} else {
  ir = ((wage * 27.5) / 100) - 869.36;
  console.log(wage - ir);
}
