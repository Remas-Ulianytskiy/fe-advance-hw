const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

  charCount: '',

  task: '',

  userInput: '',

  userErrors: '',

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
    let i;

    for (i = 0; i < this.charCount; i++) {
      const getRandChar = Math.floor(Math.random() * (this.chars.length));
      array.push(this.chars[getRandChar]);
    };

    this.task = array;
  },

  startTask: function () {
    const task = prompt(`
      Enter the indicated letters:
      ${this.task}
    `);

    this.userInput = new Array(task);

    let counter = 0;
    let mistake = 0;

    for (i = 0; i < this.task.lenght; i++) {
      if (this.task[i] != this.userInput[i]) {
        this.userErrors = mistake++;
      };
    };
  },

  errorCheck: function () {
    console.log(`Errors quantity: ${this.userErrors}`);
    if (this.userErrors != 0) {
      alert('Congratulations');
    } else {
      alert(`Next time, bro :)`)
    };
  }
};

function start() {
  keyTrainer.setCharCount();
  keyTrainer.createTask();
  keyTrainer.startTask();
  keyTrainer.errorCheck();
}

start();
