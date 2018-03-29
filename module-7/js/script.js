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
  };

  for (key in keyboard) {
    const keyRow = createRow();
    keyboardWrapper.append(keyRow);

    for (let i = 0; i < keyboard[key].length; i++) {
      const keyButton = createButton(keyboard[key][i], 'keyboard-button');
      keyRow.append(keyButton);
    };
  };
};

createLayout(keyboard);
