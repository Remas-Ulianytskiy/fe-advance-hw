"use strict";

const topRowLetters = 'qwertyuiop[]\\';
const middleRowLetters = 'asdfghjkl;\'';
const bottomRowLetters = 'zxcvbnm,./';

// top row
console.log(topRowLetters.length); // 13
console.log(topRowLetters.charAt(0)); // q
console.log(topRowLetters.charAt(12)); // \

// middle row
console.log(middleRowLetters.length); // 11
console.log(middleRowLetters.charAt(0)); // a
console.log(middleRowLetters.charAt(10)); // '

// bottom row
console.log(bottomRowLetters.length); // 10
console.log(bottomRowLetters.charAt(0)); // z
console.log(bottomRowLetters.charAt(9)); // /

const firstBracket = topRowLetters.indexOf('\[');
const secondBracket = topRowLetters.indexOf('\]');

console.log(`
  Keyboard row\: ${topRowLetters} ${middleRowLetters} ${bottomRowLetters}
  Keyboard first row\: ${topRowLetters.length} ${topRowLetters.charAt(0)} ${topRowLetters.charAt(9)}
  Keyboard second row\: ${middleRowLetters.length} ${middleRowLetters.charAt(0)} ${middleRowLetters.charAt(8)}
  Keyboard third row\: ${bottomRowLetters.length} ${bottomRowLetters.charAt(0)} ${bottomRowLetters.charAt(6)}
  Brackets position\: ${firstBracket} ${secondBracket}
`);
