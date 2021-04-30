const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercicio 1
const lesson2Shift = (modify, keyValue) => {
  modify.turno = keyValue
  return lesson2
}

//Exercicio 2
const objectsKeys = (lesson) => {
  const arrayOfLesson = Object.keys(lesson);
  for (index in arrayOfLesson) {
    console.log(`${arrayOfLesson[index]}: ${lesson[arrayOfLesson[index]]}`);
  }
}

//Exercicio 3
const objectSize = (lesson) => {
  let cont = 0
  const arrayOfLesson = Object.keys(lesson);
  for (index in arrayOfLesson) {
    arrayOfLesson[index]
    cont += 1
  }
  console.log(cont);
}

//Exercicio 4
const objectValues = (lesson) => {
  const arrayOfLesson = Object.keys(lesson);
  for (index in arrayOfLesson) {
    console.log(lesson[arrayOfLesson[index]]);
  }
}

//Exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3} );

//Exercicio 6
const allStudents = allLessons.lesson1.numeroEstudantes +
allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

//Exercicio 7
const getValueByNumber = (lesson, number) => {
  const arrayOfLesson = Object.keys(lesson);
  return lesson[arrayOfLesson[number]];
}

//Exercicio 8
const verifyPair = (lesson, keyName, keyValue) => {
  const arrayOfLesson = Object.entries(lesson);
  for (let key in arrayOfLesson) {
    if (arrayOfLesson[key][0] === keyName && arrayOfLesson[key][1] === keyValue){
      return true
    }
  }
  return false
}
