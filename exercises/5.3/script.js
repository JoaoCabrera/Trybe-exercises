function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let recupDays = document.getElementById('days');

//Exercicio 1
function insertDays () {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let itemDay = document.createElement('li');
    itemDay.innerText = dezDaysList[i];
    itemDay.classList = 'day';
    recupDays.appendChild(itemDay);
  }
}
insertDays();

function addClass () {
  let itensDay = document.querySelectorAll('.day');
  for (let i = 0; i < itensDay.length; i += 1) {
    let itemDay = itensDay[i].innerText;
    if (itemDay === '24' | itemDay === '25' | itemDay === '31') {
      itensDay[i].classList.add('holiday')
    }
    if (itemDay === '4' | itemDay === '11' | itemDay === '18' | itemDay === '25') {
      itensDay[i].classList.add('friday');
    }
  }
}
addClass();

//Exercicio 2
let buttonsContainer = document.querySelector('.buttons-container');
function holidayBtn (string) {
  let btn = document.createElement('Button');
  let lbl = document.createTextNode(string);
  btn.appendChild(lbl);

  btn.id = 'btn-holiday';
  buttonsContainer.appendChild(btn);
}
holidayBtn('Feriados');

//Exercicio 3
let buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', function() {
  let holidays = document.querySelectorAll('.holiday');
  for (let day of holidays) {
    if (day.style.backgroundColor === 'lightgreen'){
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'lightgreen';
    }
  }
});

//Exercicio 4
function fridayBtn (string) {
  let btn = document.createElement('Button');
  let lbl = document.createTextNode(string);
  btn.appendChild(lbl);

  btn.id = 'btn-friday';
  buttonsContainer.appendChild(btn);
}
fridayBtn('Sexta-feira');

//Exercicio 5
let buttonfriday = document.querySelector('#btn-friday');
buttonfriday.addEventListener('click', function() {
  let fridays = document.querySelectorAll('.friday');
  for (let day of fridays) {
    if (day.innerText !== 'Sexta-feira'){
      day.innerText = 'Sexta-feira';
    } else {
      fridays[0].innerText = '4';
      fridays[1].innerText = '11';
      fridays[2].innerText = '18';
      fridays[3].innerText = '25';
    }
  }
});

//Exercicio 6
recupDays.addEventListener('mouseover', function zoom (event) {
  let = daysZoom = document.querySelectorAll('.day');
  for (let i = 0; i < daysZoom.length; i += 1) {
    event.target.style.fontSize = '25px';
  }
});

recupDays.addEventListener('mouseleave', function zoom (event) {
  let = daysZoom = document.querySelectorAll('.day');
  for (let i = 0; i < daysZoom.length; i += 1) {
    daysZoom[i].style.fontSize = '20px';
  }
});

//Exercicio 7
let recupTasks = document.querySelector('.my-tasks')
function addTask (task) {
  let itemTask = document.createElement('span');
  itemTask.innerText = task;
  
  recupTasks.appendChild(itemTask);
}
addTask('cozinhar');
