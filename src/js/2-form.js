const FEEDBACK_DATA_KEY = "feedback-form-state";


const form = document.querySelector('.feedback-form');

form.addEventListener("input", (event) => {
  const target = event.target;

  if (target.matches("input, textarea")) {
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = typeof value === 'string' ? value.trim() : value;
    });

    localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(formObject));
  }
});

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
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const emailValue = formData.get('email');
  const messageValue = formData.get('message');

  if (emailValue && messageValue) {
    const formObject = {
      email: emailValue,
      message: messageValue
    };

    console.log(formObject);

    localStorage.removeItem(FEEDBACK_DATA_KEY);
    
    form.reset();
  } else {
    alert("Please fill in both fields."); 
  }
  
});

