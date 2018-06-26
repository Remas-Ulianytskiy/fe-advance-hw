
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

const firstNameReg = /^([a-z]|[а-яё]|[а-яґєії`´ʼ’ʼ’])+(\s[a-z]+|\s[а-яё]+|\s[а-яґєії`´ʼ’ʼ’]+){0,2}$/ig;
const lastNameReg = /^([a-z]|[а-яё]|[а-яґєії`´ʼ’ʼ’])+(([\s-]|(\s-\s))[a-z]+|([\s-]|(\s-\s))[а-яё]+|([\s-]|(\s-\s))[а-яґєії`´ʼ’ʼ’]+){0,1}$/ig;
const telReg = /^\+\d{1}(-?\s?\d){11}$/g;

submitBtn.addEventListener("click", validate);

function validate(event) {
  event.preventDefault();

  const validateResults = {
    firstNameResult: firstName.value.match(firstNameReg),
    lastNameResult: lastName.value.match(lastNameReg),
    telResult: tel.value.match(telReg)
  };

  showResults(validateResults);
};

function showResults(results) {
  resultsList.textContent = '';
  for(key in results) {
    if (results[key]) {
      createResultItem('success', `SUCCESS: ${key} passed validation`);
    } else {
      createResultItem('error', `ERROR: ${key} failed validation`);
    }
  }
};

function createResultItem(status, content) {
  const resultItem = document.createElement('li');
  resultItem.classList.add(status);
  resultItem.textContent = content;
  resultsList.append(resultItem);
};
