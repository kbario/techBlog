// global vars
// form inputs
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

const warningEl = document.getElementById('warning');

// form button
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (password !== passwordConfirm) {
    warningEl.innerHTML = 'Please provide both a email and password';
    setTimeout(() => {
      warningEl.innerHTML = '';
    }, 2500);
    return;
  }
});
