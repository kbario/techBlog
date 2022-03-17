const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const warningEl = document.getElementById('warning');

// form button
const signupBtn = document.getElementById('singup-btn');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    firstName.value.trim() === '' ||
    lastName.value.trim() === '' ||
    email.value.trim() === '' ||
    password.value.trim() === '' ||
    passwordConfirm.value.trim() === ''
  ) {
    warningEl.innerHTML = 'Please fill out all sections';
    setTimeout(() => {
      warningEl.innerHTML = '';
    }, 2500);
    return;
  } else {
  }
});
