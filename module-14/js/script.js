const task = 'etyrq';
let timeResultObject = new ResultСonstructor();
var time = 0;

// input and btn selectors
const timerOutput = document.querySelector('.timer');
const taskOutput = document.querySelector('.task');
const taskInput = document.querySelector('#task-input');
const startTaskButton = document.querySelector('#start-task');
const stopTaskButton = document.querySelector('#stop-task');
// current result
const currentTimeOutput = document.querySelector('.current-time');
const currentCharsOutput = document.querySelector('.current-chars');
const currentQuantityOutput = document.querySelector('.current-quantity');
const currentTimeResult = document.querySelector('.current-time-result');

// global timer
const startTimer = setInterval(() => {
  time += 17;
  let mls = time%1000;
  let s = (time - mls)/1000;
  if (s < 10) s = `0${s}`;
  if (mls < 10) mls = `00${mls}`;
  if (mls < 100) mls = `0${mls}`;
  timerOutput.innerHTML = `${s}:${mls}`;
  resultObject.timeMls = mls;
  resultObject.timeS = s;
}, 17);

function ResultСonstructor (startTime = 0, stopTime = 0, interval = 0) {
  this.startTime = startTime;
  this.stopTime = stopTime;
  this.interval = interval;
};

ResultСonstructor.prototype.start = function () {
  this.startTime = time;
};

ResultСonstructor.prototype.stop = function () {
  this.stopTime = time;
  this.interval = this.stopTime - this.startTime;
};

const resultObject = {
  timeMls: 0,
  timeS: 0,
  correctChars: '',
  completionTime: 0,
  correctCharsQuantity: 0
};

function startTask() {
  timeResultObject.start();

  taskInput.setAttribute('maxlength', task.length);
  taskOutput.innerHTML = task;
  taskInput.focus();

  taskInput.oninput = () => {
    taskInputValue = taskInput.value;
    if (taskInputValue.length === task.length) {
      for (var i = 0; i < task.length; i++) {
        if (task[i] === taskInputValue[i]) {
          stopTask();
          resultObject.correctChars += task[i];
          resultObject.correctCharsQuantity += 1;
        };
      };

      currentTimeOutput.innerHTML = `Time in mls: ${time}`;
      currentCharsOutput.innerHTML = `Correct Chars: ${resultObject.correctChars}`;
      currentQuantityOutput.innerHTML = `Quantity: ${resultObject.correctCharsQuantity}`;
    };
  };
};

function stopTask() {
  timeResultObject.stop()
  taskOutput.innerHTML = '';
  taskInput.value = '';
  currentTimeResult.textContent = `stop - start = interval:${timeResultObject.interval}ms`
  console.log(timeResultObject);
};

startTaskButton.addEventListener('click', startTask);
stopTaskButton.addEventListener('click', stopTask);
