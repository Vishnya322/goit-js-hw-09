const FEEDBACK_DATA_KEY = "feedback-form-state";
const FEEDBACK_MESSAGE_KEY = "feedback-message";

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input'); 
const textarea = form.querySelector('textarea');

try {
  const initialFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));

  Array.from(form.elements).forEach(element => {
    const storageValue = initialFormData[element.name];
    if (storageValue) {
      element.value = storageValue;
    }
  });
} catch (e) {
  console.error("PARSE STORAGE FORM ERROR");
  localStorage.removeItem(FEEDBACK_DATA_KEY);
}

input.addEventListener("input", () => {
  const formData = new FormData(form);

  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = typeof value === 'string' ? value.trim() : value;
  });
  
  localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(formObject));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

const formData = new FormData(form);
const emailValue = formData.get('email');
const messageValue = formData.get('message');


if (emailValue && messageValue) {
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = typeof value === 'string' ? value.trim() : value;
  });

  console.log(formObject);

  localStorage.removeItem(FEEDBACK_MESSAGE_KEY);
  form.reset();
} else {
    alert("Please fill in both fields."); 
}
});

