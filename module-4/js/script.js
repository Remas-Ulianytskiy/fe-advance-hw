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
function getRandomRow(min, max, min2) {
  const randomRow = Math.floor(Math.random() * (max - min)) + min;
  const randomRowLenght = keyboard[randomRow].length;
  const randomChar = Math.floor(min2 + Math.random() * (randomRowLenght - min2));

  return keyboard[randomRow][randomChar];
}

const randomChar = getRandomRow(0, 3, 0);

console.log(`
  First task result:
  ${keyboard}
`);

console.log(`
  Second and Third task result:
  ${randomChar}
`);
