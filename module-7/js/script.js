const keyboard = {
  topRow: 'qwertyuiop[]\\',
  middleRow: 'asdfghjkl;\'',
  bottomRow: 'zxcvbnm,./'
};

function createLayout(keyboard) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.prepend(wrapper);

  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard-wrapper');
  wrapper.prepend(keyboardWrapper);

  function createRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
  };

  function createButton(content, className) {
    const button = document.createElement('button');
    button.classList.add(className);
    button.innerText = content;
    return button;
    // keyRow.append(keyButton);
  };

  for (key in keyboard) {
    const keyRow = createRow();
    keyboardWrapper.append(keyRow);

    for (let i = 0; i < keyboard[key].length; i++) {
      const keyButton = createButton(keyboard[key][i], 'keyboard-button');
      keyRow.append(keyButton);
    };

  };


    // for (let i2 = 0; i < keyboard[key].length; i++) {
    //   const button = document.createElement('button').classList.add('key-button');
    //   button.innerText = (keyboard[key][i2]);
    //   row.append(button);
    // }
  // }
};

createLayout(keyboard);
