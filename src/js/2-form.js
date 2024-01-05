const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', formSubmitHandler);
form.addEventListener('input', textareaHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function textareaHandler(event) {
  if (event.target.classList.contains('message')) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
  }
}

function setTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  console.log(savedMessage);

  if (savedMessage) {
    const textareas = document.querySelectorAll('.message');
    textareas.forEach(textarea => {
      textarea.value = savedMessage;
    });
  }
}

setTextarea();
