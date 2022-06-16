import caesarCipher from './caesarCipher';

test('basic test', () => {
  expect(caesarCipher('teapot')).toEqual('ufbqpu');
});

test('secondary test', () => {
  expect(caesarCipher('chicken')).toEqual('dijdlfo');
});

test('capital letters', () => {
  expect(caesarCipher('GNOMes')).toEqual('HOPNft');
});

test('handles spaces', () => {
  expect(caesarCipher('h i    there graeme')).toEqual('i j    uifsf hsbfnf');
});

test('handles special characters', () => {
  expect(caesarCipher(':::@@@^%&*')).toEqual(':::@@@^%&*');
});

test('handles wrapping', () => {
  expect(caesarCipher('zebraz')).toEqual('afcsba');
});

test('handles everything at the same time', () => {
  expect(caesarCipher('i L0v3 ZZZZZZZZZEbras!!!?????')).toEqual(
    'j M0w3 AAAAAAAAAFcsbt!!!?????'
  );
});
