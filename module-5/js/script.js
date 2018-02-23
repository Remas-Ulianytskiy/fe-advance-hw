const keyboard = {
  layouts: {
    en: {
      alphabet: 'qwertyuiopasdfghjklzxcvbnm';
      topRow: [alphabet.slice(0, 10)],
      middleRow: [alphabet.slice(10, 19)],
      bottomRow: [alphabet.slice(19, 28);]
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

  const selectedOption = ['En', 'Ru', 'Ua']

  alert(`you chouse ${selectedOption[parseInt(languageChoice)]}`)

} while (languageChoice !== '0' && languageChoice !== '1' && languageChoice !== '2'); // условие ?
