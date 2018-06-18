const apiUrl = "https://test-users-api.herokuapp.com/users/";

// form btn & input
const getUsersBtn = document.querySelector('#get-all-users-btn');

const getUserByIdBrtn = document.querySelector('#get-user-by-id-btn')
const getUserByIdInput = document.querySelector('#get-user-by-id-input');

const addUserBtn = document.querySelector('#add-user-btn');
const addUserNameInput = document.querySelector('#add-user-name-input');
const addUserAgeInput = document.querySelector('#add-user-age-input');

const removeUserBtn = document.querySelector('#remove-user-btn');
const removeUserInput = document.querySelector('#remove-user-input');

const updateUserBtn = document.querySelector('#update-user-btn');
const updateUserIdInput = document.querySelector('#update-user-id-input');
const updateUserNameInput = document.querySelector('#update-user-name-input');
const updateUserAgeInput = document.querySelector('#update-user-age-input');

// result block
const tBody = document.querySelector("#js-tbody");
const htmlTemplate = document.querySelector("#table-row").textContent.trim();
const compiled = _.template(htmlTemplate);
const updateView = (usersInfo) => {
  let htmlString = "";
  usersInfo.forEach((item) => {
    htmlString += compiled(item);
  });
  tBody.innerHTML = htmlString;
};

// event listener
getUsersBtn.addEventListener('click', getAllUsers);
getUserByIdBrtn.addEventListener('click', getUserById);
addUserBtn.addEventListener('click', addUser);
removeUserBtn.addEventListener('click', removeUser);
updateUserBtn .addEventListener('click', updateUser);

// functions
function getAllUsers() {
  fetch(apiUrl)
    .then ((response) => {
      if(response.ok) return response.json();
    })
    .then ((users) => {
      console.log(users);
      const usersInfo = users.data;
      updateView(usersInfo);
    })
    .catch ((error) => {
      console.error("Error: ", error);
    })
}

function getUserById() {
  fetch(`${apiUrl}${getUserByIdInput.value}`)
    .then((response) => {
      if(response.ok) return response.json();
    })
    .then((users) => {
      if (users.status === 500) {
        alert(`User with ID: ${getUserByIdInput.value} no in the database`);
        getUserByIdInput.value = "";
      } else if (users.status === 404) {
        alert(`User with ID: ${getUserByIdInput.value} not found in the database`);
        getUserByIdInput.value = "";
      } else if (!getUserByIdInput.value) {
        alert(`Empty value`);
      } else {
        updateView([users.data]);
        getUserByIdInput.value = '';
      }
    })
    .catch(error => {
      console.error('Error: ', error);
    })
}

function addUser() {
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ name: addUserNameInput.value, age: addUserAgeInput.value}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if(response.ok) return response.json();
    })
    .then((users) => {
      if (users.status === 500) {
        alert(`You entered incorrect data`);
        addUserNameInput.value = '';
        addUserAgeInput.value = '';
      } else {
        alert(`User with name ${addUserNameInput.value} ${addUserAgeInput.value} years old, successfully added to database with ID:  ${users.data._id}`);
        addUserNameInput.value = '';
        addUserAgeInput.value = '';
      }
    })
    .catch((error) => {
      console.error('Error: ', error);
    })
}

function removeUser() {
  fetch(`${apiUrl}${removeUserInput.value}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      if(response.ok) return response.json();
    })
    .then((users) => {
      if(users.status === 500) {
        alert(`There is no user with this ID in the database`);
        removeUserInput.value = '';
      } else if (!removeUserInput.value) {
        alert(`Empty value`);
      } else if (!users.data) {
        alert (`User with ID: ${removeUserInput.value} already removed from the database`);
        removeUserInput.value = '';
      } else {
        alert(`User with ID: ${removeUserInput.value}, name: ${users.data.name} successfully deleted from the database`);
        removeUserInput.value = '';
      }
    })
    .catch((error) => {
      console.error('Error: ', error);
    })
}

function updateUser() {
  fetch(`${apiUrl}${updateUserIdInput.value}`, {
    method: 'PUT',
    body: JSON.stringify({name: updateUserNameInput.value, age: updateUserAgeInput.value}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      if(response.ok) return response.json();
    })
    .then((users) => {
      if (!updateUserIdInput.value) {
        alert('Empty value');
      } else if (users.status === 500 || users.status === 404) {
        alert(`User with ID: ${updateUserIdInput.value} not found in the database`);
        updateUserIdInput.value = '';
      } else {
        alert(`User with ID: ${updateUserIdInput.value} successfully received updates`)
        updateView([users.data]);
        updateUserIdInput.value = '';
        updateUserNameInput.value = '';
        updateUserAgeInput.value = '';
      }
    })
    .catch((error) => {
      console.error('Error: ', error);
    })
}
