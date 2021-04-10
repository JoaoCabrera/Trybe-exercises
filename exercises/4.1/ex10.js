let cost = 200;
let sale = 800;
let profit = sale - (cost + (20 * cost) / 100);
if (cost  < 0) {
  console.log('Error, value not allowed');
} else {
  console.log(profit * 1000);
}
