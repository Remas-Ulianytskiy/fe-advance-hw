"use strict";

const taba = 1;
const sharm = 2;
const hurgada = 3;

const choiceResort = prompt(`
  Choose a resort.
  Taba - 1 Sharm - 2 Hurgada - 3
`);

if (choiceResort == taba) {
  alert('You choosed Taba');
} else if (choiceResort == sharm) {
  alert('You choosed Sharm');
} else if (choiceResort == hurgada) {
  alert('You choosed Hurgada');
} else if (choiceResort == '') {
  alert('You must enter the tour number!');
} else {
  alert('Incorrect value!');
}
