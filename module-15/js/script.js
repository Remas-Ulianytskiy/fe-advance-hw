var time = 0;

// selectors
const timerOutput = document.querySelector('.timer');
const resultOutput = document.querySelector('.result');
const startButton = document.querySelector('#start-task');
const stopButton = document.querySelector('#stop-task');
const getTimeButton = document.querySelector('#get-time');
const getTimeToNYButton = document.querySelector('#get-time-to-ny');

// global timer
const startTimer = setInterval(() => {
  time += 17;
  let mls = time%1000;
  let s = (time - mls)/1000;
  if (s < 10) s = `0${s}`;
  if (mls < 10) mls = `00${mls}`;
  if (mls < 100) mls = `0${mls}`;
  timerOutput.textContent = `${s}:${mls}`;
}, 17);

const Timer = class Timer {
  constructor(startTime = 0, stopTime = 0) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = this.stopTime - this.startTime;
  }

  start () {
    this.startTime = time;
    resultOutput.textContent = `Start on the ${this.startTime} millisecond`;
  }

  stop () {
    this.stopTime = time;
    resultOutput.textContent = `Stop on the ${this.stopTime} millisecond`;
  }

  getTime() {
    this.interval = this.stopTime - this.startTime;
    if (this.interval <= 0 || this.stopTime == 0 || this.startTime == 0) {
      resultOutput.textContent = `Error. Presse Start and then Stop`;
    } else {
      resultOutput.textContent = `Interval ${this.interval} millisecond`;
    }
  }

  timeToNY () {
    let timeend = new Date();
    timeend = new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);

    let today = new Date();
    today = Math.floor((timeend-today)/1000);
    let tsec = today % 60;
    today = Math.floor(today/60);
    if (tsec<10) tsec = '0' + tsec;
    let tmin = today % 60;
    today = Math.floor(today/60);
    if (tmin<10) tmin = '0' + tmin;
    let thour = today % 24;
    today = Math.floor (today/24);
    let timestr = `${today}d ${thour}h ${tmin}m ${tsec}s`;

    resultOutput.textContent = timestr;
  }
};

const firstTimer = new Timer (10, 45);
const secondTimer = new Timer (38, 67);
const thirdTimer = new Timer (41, 95);

console.log('First Timer:', firstTimer);
console.log('Second Timer:', secondTimer);
console.log('Third Timer:', thirdTimer);

const stopwatch = new Timer();

// events listeners
startButton.addEventListener('click', () => stopwatch.start());
stopButton.addEventListener('click', () => stopwatch.stop());
getTimeButton.addEventListener('click', () => stopwatch.getTime());
getTimeToNYButton.addEventListener('click', () => stopwatch.timeToNY());
