const { test, expect, describe } = require('@jest/globals');
const { sum } = require('./ex01');

describe('A função sum', () => {
  test('Soma entre os números', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('Erro', () => {
    expect(() => { 
      sum(4, '5').toThrow();
    });
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});
