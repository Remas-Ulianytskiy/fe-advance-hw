// Buttons && Inputs
const timerOutput = document.querySelector('.timer');
const taskOutput = document.querySelector('.task');
const taskInput = document.querySelector('#task-input');
const startTaskButton = document.querySelector('#start-task');
const stopTaskButton = document.querySelector('#stop-task');
const cleanLocalStorageButton = document.querySelector('.clean');
// current result
const currentTimeOutput = document.querySelector('.current-time');
const currentCharsOutput = document.querySelector('.current-chars');
const currentQuantityOutput = document.querySelector('.current-quantity');
// best result
const bestTimeOutput = document.querySelector('.best-time');
const bestCharsOutput = document.querySelector('.best-chars');
const bestQuantityOutput = document.querySelector('.best-quantity');
const alertMsgTitle = document.querySelector('.alert-msg-title');

const task = 'etyrq';
let time = 0;
let startTimer;
let taskInputValue;
let resultObject = new Results();
resultObject.displayBestResult();
taskInput.setAttribute('disabled', 'disabled');

function Results (correctChars = [], completionTime = 0, correctCharsQuantity = 0) {
  this.correctChars = correctChars;
  this.completionTime = completionTime;
  this.correctCharsQuantity = correctCharsQuantity;

  this.displayCurentResults = function () {
    currentTimeOutput.textContent = `Time in mls: ${time}`;
    currentCharsOutput.textContent = `Correct Chars: ${this.correctChars}`;
    currentQuantityOutput.textContent = `Quantity: ${this.correctCharsQuantity}`;
    if (this.correctChars.length === 0) {
      currentCharsOutput.textContent = `Correct Chars: 0`;
    }
  };

  this.displayBestResult = function () {
    if (localStorage.getItem('time') !== null) {
      bestTimeOutput.textContent = `Time in mls: ${localStorage.getItem('time')}`;
      bestCharsOutput.textContent = `Correct Chars: ${localStorage.getItem('Correct-Chars')}`;
      bestQuantityOutput.textContent = `Quantity: ${localStorage.getItem('Correct-Chars-Quantity')}`;
    };
    if (localStorage.getItem('time') === null) {
      bestTimeOutput.textContent = `There is no better result yet`;
      bestCharsOutput.textContent = '';
      bestQuantityOutput.textContent = '';
    };
  };

  this.localStorageAdd = function () {
    localStorage.setItem('time', `${time}`);
    localStorage.setItem('Correct-Chars', `${this.correctChars}`);
    localStorage.setItem('Correct-Chars-Quantity', `${this.correctCharsQuantity}`);
  };

  this.displayBestResultAlert = function () {
    alertMsgTitle.removeAttribute('hidden');
    setTimeout(() => {
      alertMsgTitle.setAttribute('hidden', 'true');
    }, 1800);
  };
};

const startTask = function () {
  let resultObject = new Results();
  resultObject.displayBestResult();
  taskInput.removeAttribute('disabled');

  startTimer = setInterval(() => {
    time += 18;
    let mls = time%1000;
    let s = (time - mls)/1000;
    if (s < 10) s = `0${s}`;
    if (mls < 10) mls = `00${mls}`;
    if (mls < 100) mls = `0${mls}`;
    timerOutput.textContent = `${s}:${mls}`;
  }, 18);

  taskOutput.textContent = task;
  taskInput.focus();

  taskInput.oninput = () => {
    taskInputValue = taskInput.value;

    if (taskInputValue.length === 5) {
      clearInterval(startTimer);
      for (let i = 0; i < task.length; i++) {
        if (task[i] === taskInputValue[i]) {
          resultObject.correctChars += task[i];
          resultObject.correctCharsQuantity += 1;
        };
      };

      resultObject.displayCurentResults();

      if (resultObject.correctCharsQuantity > 0) {
        if (localStorage.getItem('time')) {
          if (localStorage.getItem('time') > time) {
            resultObject.localStorageAdd();
            resultObject.displayBestResultAlert();
          };
        };
        if (localStorage.getItem('time') === null) {
          resultObject.localStorageAdd();
          resultObject.displayBestResultAlert();
        };
      };

      resultObject.displayBestResult();
    };
  };
};

const stopTask = function () {
  clearInterval(startTimer);
  time = 0;
  taskInput.value = '';
  taskOutput.innerHTML = '';
  timerOutput.innerHTML = '00:000';
  currentTimeOutput.textContent = '';
  currentCharsOutput.textContent = '';
  currentQuantityOutput.textContent = '';
  taskInput.setAttribute('disabled', 'disabled');
};

startTaskButton.addEventListener('click', () => {
  if (time === 0) {
    startTask();
  };
  if (time !== 0) {
    stopTask();
    startTask();
  };
});

stopTaskButton.addEventListener('click', () => {
  stopTask();
});

cleanLocalStorageButton.addEventListener('click', () => {
  localStorage.clear();
  resultObject.displayBestResult();
  stopTask();
});
