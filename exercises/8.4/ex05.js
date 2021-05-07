const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, objName) => 
    acc + objName.split('').reduce((letterA, letter) => {
      if (letter.toLowerCase() === 'a') {
        return letterA + 1
      } return letterA
    }, 0)
  , 0)
}

assert.deepStrictEqual(containsA(), 20);
