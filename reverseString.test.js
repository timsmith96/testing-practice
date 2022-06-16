import reverseString from './reverseString';

test('reverses a string', () => {
  expect(reverseString('camel')).toEqual('lemac');
});

test('works with spaces', () => {
  expect(reverseString('c hicken')).toEqual('nekcih c');
});

test('works with special characters', () => {
  expect(reverseString('a::@@@TgJ')).toEqual('JgT@@@::a');
});
