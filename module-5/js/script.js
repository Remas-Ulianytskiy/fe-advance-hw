const keyboard = {
  layouts: {
    en: {
      topRow: ['qwertyuiop'],
      middleRow: ['asdfghjkl'],
      bottomRow: ['zxcvbnm']
    },

    ru: {
      topRow: ['йцукенгшщзхъ'],
      middleRow: ['фывапролджэ'],
      bottomRow: ['ячсмитьбю']
    },

    ua: {
      topRow: ['йцукенгшщзхї'],
      middleRow: ['фівапролджє'],
      bottomRow: ['ячсмитьбю']
    }
  },

  langs: ['en', 'ru', 'ua'],
  currentLang: ''
};

// cycle start

do {
  const languageChoice = prompt(`
    Please choose a language.
    En - 0, Ru - 1, Ua - 2
  `)

  if (languageChoice === '0') {
    alert('0');
    break
  } else if (languageChoice === '1') {
    alert('1');
    break
  } else if (languageChoice === '2') {
    alert('2');
    break
  } else {
    alert(`Inaccessible language selected. Try again.`)
  }

} while (languageChoice != false);
