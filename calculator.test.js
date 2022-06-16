import calculator from './calculator';

test('add function adds two numbers', () => {
  expect(calculator.add(3, 2)).toEqual(5);
});

test('subtract function subtracts', () => {
  expect(calculator.subtract(5, 1)).toEqual(4);
});

test('divide function divides', () => {
  expect(calculator.divide(100, 50)).toEqual(2);
});

test('multiply function multiplies', () => {
  expect(calculator.multiply(60, 4)).toEqual(240);
});
