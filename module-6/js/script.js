const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: null,
  task: null,
  userInput: null,
  userErrors: 0,

  setCharCount: function () {
    let check = false;

    while (!check) {
      const userSelect = prompt('Enter the number of characters');

      if (this.checkPositiveInteger(userSelect)) {
        this.charCount = userSelect;
        check = true;
      };
    };
  },

  checkPositiveInteger: function (num) {
    if (num > 0 && parseInt(num) == num) {
      return true;
    } else {
      return false;
    };
  },

  createTask: function () {
    const array = [];

    for (let i = 0; i < this.charCount; i++) {
      const getRandChar = Math.floor(Math.random() * (this.chars.length));
      array.push(this.chars[getRandChar]);
    };

    this.task = array.join('');
  },

  startTask: function () {
    const task = prompt(`
      Enter the indicated letters:
      ${this.task}
    `);

    this.userInput = task;

    for ( let i = 0; i < this.task.length; i++) {
      if (this.task[i] != this.userInput[i]) {
        this.userErrors += 1;
      };
    };
  },

  errorCheck: function () {
    if (this.userErrors == 0) {
      alert('Congratulations');
    } else {
      alert(`Next time, bro :)`);
    };
  },

  start: function () {
    this.setCharCount();
    this.createTask();
    this.startTask();
    this.errorCheck();

    console.log(`
      Characters: ${this.charCount}
      Task: ${this.task}
      User Input: ${this.userInput}
      Number of mistakes: ${this.userErrors}
    `);
  }
};

keyTrainer.start();

// do while
// parse in prompt
// 
