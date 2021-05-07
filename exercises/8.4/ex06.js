const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function sumGrade (acc, grade) {
  return grade + acc
}

function avarageGrade (index) {
  const sum = grades[index].reduce(sumGrade, 0)
  return sum / grades[index].length
}

function studentAverage() {
  // escreva seu código aqui
  return students.map((student, index) => ({
    name: student,
    average: avarageGrade(index)
  }));
}


const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
