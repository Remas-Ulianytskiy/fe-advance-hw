// first task
const alphabet = 'qwertyuiopasdfghjklzxcvbnm';

function addKeyboard (parameter) {
  const firstRow = parameter.slice(0, 10);
  const secondRow = parameter.slice(10, 19);
  const thirdRow = parameter.slice(19, 28);

  const alphabetArray = [firstRow, secondRow, thirdRow];
  return alphabetArray;
}

const keyboard = addKeyboard(alphabet);
console.log(`
  First task result:
  ${keyboard}
`);

// second task
function getRandCharInRow (){
  // random row selection
  function getRandomRow(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  function  {

  }
}

// const a = getRandomRow(1, 4);
// console.log(a);

// third task
function {}
