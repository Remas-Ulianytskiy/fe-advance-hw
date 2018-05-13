const task = 'etyrq';
let time = 0;
let startTimer;
let taskInputValue;

const timerOutput = document.querySelector('.timer');
const taskOutput = document.querySelector('.task');
const taskInput = document.querySelector('#task-input');
const startTaskButton = document.querySelector('#start-task');
const stopTaskButton = document.querySelector('#stop-task');
// current result
const currentTimeOutput = document.querySelector('.current-time');
const currentCharsOutput = document.querySelector('.current-chars');
const currentQuantityOutput = document.querySelector('.current-quantity');
// best result
const bestTimeOutput = document.querySelector('.best-time');
const bestCharsOutput = document.querySelector('.best-chars');
const bestQuantityOutput = document.querySelector('.best-quantity');

const resultObject = {
  timeMls: 0,
  timeS: 0,
  correctChars: '',
  completionTime: 0,
  correctCharsQuantity: 0
};

const displayBestResult = () => {
  if (localStorage.getItem('time') !== null) {
    bestTimeOutput.innerHTML = `Time in mls: ${localStorage.getItem('time')}`;
    bestCharsOutput.innerHTML = `Correct Chars: ${localStorage.getItem('Correct-Chars')}`;
    bestQuantityOutput.innerHTML = `Quantity: ${localStorage.getItem('Correct-Chars-Quantity')}`;
  }
};

displayBestResult();

const startTask = function () {
  displayBestResult();
  startTimer = setInterval(() => {
    time += 17;
    let mls = time%1000;
    let s = (time - mls)/1000;
    if (s < 10) s = `0${s}`;
    if (mls < 10) mls = `00${mls}`;
    if (mls < 100) mls = `0${mls}`;
    timerOutput.innerHTML = `${s}:${mls}`;
    resultObject.timeMls = mls;
    resultObject.timeS = s;
    console.log(time);
  }, 17);

  taskInput.setAttribute('maxlength', task.length);
  taskOutput.innerHTML = task;
  taskInput.focus();

  taskInput.oninput = () => {
    taskInputValue = taskInput.value;
    console.log(taskInputValue);
    if (taskInputValue.length === 5) {
      clearInterval(startTimer);
      for (let i = 0; i < task.length; i++) {
        if (task[i] === taskInputValue[i]) {
          resultObject.correctChars += task[i];
          resultObject.correctCharsQuantity += 1;
        };
      };

      currentTimeOutput.innerHTML = `Time in mls: ${time}`;
      currentCharsOutput.innerHTML = `Correct Chars: ${resultObject.correctChars}`;
      currentQuantityOutput.innerHTML = `Quantity: ${resultObject.correctCharsQuantity}`;

      const localStorageAdd = () => {
        localStorage.setItem('time', `${time}`);
        localStorage.setItem('Correct-Chars', `${resultObject.correctChars}`);
        localStorage.setItem('Correct-Chars-Quantity', `${resultObject.correctCharsQuantity}`);
      };

      if (resultObject.correctCharsQuantity > 0) {
        if (localStorage.getItem('time')) {
          if (localStorage.getItem('time') > time) {
            localStorageAdd();
          }
        }

        if (localStorage.getItem('time') === null) {
          localStorageAdd();
        }
      };
    };
  };
};

const stopTask = function () {
  clearInterval(startTimer);
  timerOutput.innerHTML = '00:000';
  taskOutput.innerHTML = '';
  taskInput.value = '';
  time = 0;
};

startTaskButton.addEventListener('click', () => {
  if (time === 0) startTask();
  if (time !== 0) {
    stopTask();
    startTask();
  };
});

stopTaskButton.addEventListener('click', () => {
  stopTask();
});
