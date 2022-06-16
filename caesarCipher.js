export default function caesarCipher(str) {
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return str
    .split('')
    .map((character) => {
      if (/[^A-Za-z]/.test(character)) return character;
      if (character.toLowerCase() === character) {
        return alphabetLower[calcNewIndex(alphabetLower, character)];
      } else {
        return alphabetUpper[calcNewIndex(alphabetUpper, character)];
      }
    })
    .join('');
}

function calcNewIndex(alphabet, character) {
  return (alphabet.indexOf(character) + 1) % 26;
}
