// keyboard button (string)
const firstRowKeyboard = 'qwertyuiop[]';
const secondRowKeyboard = 'asdfghjkl;\'';
const thirdRowKeyboard = 'zxcvbnm,./';

// string to array
const firstArr = firstRowKeyboard.split('');
const secondArr = secondRowKeyboard.split('');
const thirdArr = thirdRowKeyboard.split('');

// array association
const keyboardArr = firstArr.concat(secondArr, thirdArr);

// result
console.log(
  keyboardArr[17]+keyboardArr[2]
  +keyboardArr[20]+keyboardArr[20]
  +keyboardArr[8]
);

console.log(
  keyboardArr[18]+keyboardArr[12]
  +keyboardArr[26]+keyboardArr[12]
  +keyboardArr[13]+keyboardArr[25]
  +keyboardArr[3]+keyboardArr[7]
  +keyboardArr[9]+keyboardArr[4]
);

console.log(
  keyboardArr[4]+keyboardArr[3]
  +keyboardArr[12]+keyboardArr[7]
  +keyboardArr[28]+keyboardArr[2]
  +keyboardArr[3]
);

// index search
keyboardArr.indexOf('h'); // 17
keyboardArr.indexOf('e'); // 2
keyboardArr.indexOf('l'); // 20
keyboardArr.indexOf('o'); // 8
keyboardArr.indexOf('j'); // 18
keyboardArr.indexOf('a'); // 12
keyboardArr.indexOf('v'); // 26
keyboardArr.indexOf('s'); // 13
keyboardArr.indexOf('c'); // 25
keyboardArr.indexOf('r'); // 3
keyboardArr.indexOf('i'); // 7
keyboardArr.indexOf('p'); // 9
keyboardArr.indexOf('t'); // 4
keyboardArr.indexOf('n'); // 28
