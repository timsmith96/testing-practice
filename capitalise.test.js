import capitalise from './capitalise';

test('capitalises first letter', () => {
  expect(capitalise('camel')).toEqual('Camel');
});

test('capitalises first letter', () => {
  expect(capitalise('teapot')).toEqual('Teapot');
});

test('capitalises first letter', () => {
  expect(capitalise('CHICKEN')).toEqual('Chicken');
});

test('capitalises first letter', () => {
  expect(capitalise('short and stout')).toEqual('Short and stout');
});

test('capitalises first letter', () => {
  expect(capitalise('434@garden')).toEqual('434@garden');
});
