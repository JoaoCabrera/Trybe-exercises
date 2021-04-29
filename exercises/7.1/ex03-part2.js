const btn = document.getElementById('btn');
const btnClicks = document.getElementById('btn-clicks');
let count = 0;

btn.addEventListener('click', () => {
  count += 1
  btnClicks.innerText = count
});
