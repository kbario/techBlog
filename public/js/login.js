// global vars
// form inputs
const email = document.getElementById('email');
const password = document.getElementById('password');

const warningEl = document.getElementById('warning');

// form button
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value.trim() === '' || password.value.trim() === '') {
    warningEl.innerHTML = 'Please provide both an email and password';
    setTimeout(() => {
      warningEl.innerHTML = '';
    }, 2500);
    return;
  } else {
  }
});
