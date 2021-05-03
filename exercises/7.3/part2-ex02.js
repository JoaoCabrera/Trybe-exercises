const assert = require('assert');
const wordLengths = (array) => {
  let arrayResult = [];
  for (let index in array) {
    arrayResult.push(array[index].length);
  }
  return arrayResult;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
