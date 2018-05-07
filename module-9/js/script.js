const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
const allButtons = document.querySelectorAll('.keyboard__button');
const spaceButton = document.querySelector('.keyboard__space-button');
const press = document.querySelector('#press-key');

const keyDownEvent = (e) => {
  if (keys.indexOf(e.key) >= 0) {
    for (let i = 0; i < allButtons.length; i++) {
      if (allButtons[i].innerHTML === e.key) {
        allButtons[i].classList.add('keyboard__button--active');
        press.innerHTML = keys[i];
      }
    }
  }
};

const keyUpEvent = (e) => {
  if (keys.indexOf(e.key) >= 0) {
    for (let i = 0; i < allButtons.length; i++) {
      if (allButtons[i].innerHTML === e.key) {
        allButtons[i].classList.remove('keyboard__button--active');
        press.innerHTML = '';
      }
    }
  }
};

window.addEventListener("keydown", keyDownEvent);
window.addEventListener("keyup", keyUpEvent);
