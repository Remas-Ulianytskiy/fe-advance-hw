const keyboard = {
  layouts: {
    en: {
      topRow: 'qwertyuiop',
      middleRow: 'asdfghjkl',
      bottomRow: 'zxcvbnm'
    },

    ru: {
      topRow: 'йцукенгшщзхъ',
      middleRow: 'фывапролджэ',
      bottomRow: 'ячсмитьбю'
    },

    ua: {
      topRow: 'йцукенгшщзхї',
      middleRow: 'фівапролджє',
      bottomRow: 'ячсмитьбю'
    }
  },

  langs: ['en', 'ru', 'ua'],
  currentLang: ''
};

let correctValue = false;

while (!correctValue) {
  const choice = prompt(`
    Please choose a language.
    En-0, Ru-1, Ua-2
  `);

  switch (choice) {
    case '0': case '1': case '2':
      keyboard.currentLang = keyboard.langs[choice];
      alert(`You choose ${keyboard.currentLang}`);
      console.log(`currentLang = ${keyboard.currentLang}`);
      correctValue = true; break;

    case null:
      correctValue = true; break;

    default:
      alert('You choose an unavailable language.'); break;
  };
};

function getRandCharInAlph(min, max, min2) {
  const getRandRow = Math.floor(Math.random() * (max - min)) + min;
  let randRow;

  switch (getRandRow) {
    case 0: randRow = keyboard.layouts[keyboard.currentLang].topRow; break;
    case 1: randRow = keyboard.layouts[keyboard.currentLang].middleRow; break;
    case 2: randRow = keyboard.layouts[keyboard.currentLang].bottomRow; break;
  }

  const randRowLenght = randRow.length;
  const getRandChar = min2 + Math.floor(Math.random() * (randRowLenght - min2));
  return randRow[getRandChar];
};

console.log(`random char: ${getRandCharInAlph(0, 3, 0)}`);
