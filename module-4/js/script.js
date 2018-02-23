// first task
const alphabet = 'qwertyuiopasdfghjklzxcvbnm';

function addKeyboard(parameter) {
  const firstRow = parameter.slice(0, 10);
  const secondRow = parameter.slice(10, 19);
  const thirdRow = parameter.slice(19, 28);

  return [firstRow, secondRow, thirdRow];
}

const keyboard = addKeyboard(alphabet);

// second and third task
function getRandomRow(min, max) {
  const randomRow = Math.floor(Math.random() * (max - min)) + min;
  const randomRowLenght = keyboard[randomRow].length;
  const randomChar = Math.floor(0 + Math.random() * (randomRowLenght - 0));

  return keyboard[randomRow][randomChar];
}

const randomChar = getRandomRow(0, 3);

console.log(`
  First task result:
  ${keyboard}
`);

console.log(`
  Second and Third task result:
  ${randomChar}
`);
