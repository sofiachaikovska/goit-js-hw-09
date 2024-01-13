const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', formSubmitHandler);
form.addEventListener('input', inputHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  const emailInput = document.querySelector('.email');
  const messageInput = document.querySelector('.message');

  if (emailInput.value && messageInput.value) {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    event.currentTarget.reset();
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('Please fill in both email and message fields before submitting.');
  }
}

function inputHandler(event) {
  if (
    event.target.classList.contains('email') ||
    event.target.classList.contains('message')
  ) {
    updateLocalStorage();
  }
}

function updateLocalStorage() {
  const emailInput = document.querySelector('.email');
  const messageInput = document.querySelector('.message');

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function setFormFields() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  const emailInput = document.querySelector('.email');
  const messageInput = document.querySelector('.message');

  if (savedData) {
    const { email, message } = JSON.parse(savedData);

    emailInput.value = email;
    messageInput.value = message;
  }
}

setFormFields();
