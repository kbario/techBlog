// global vars
// form inputs
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

const loginWarningEl = document.getElementById('login-warning');

// form button
const loginLoginBtn = document.getElementById('login-login-btn');

loginLoginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (loginEmail.value.trim() === '' || loginPassword.value.trim() === '') {
    loginWarningEl.innerHTML = 'Please provide both an email and password';
    setTimeout(() => {
      loginWarningEl.innerHTML = '';
    }, 2500);
    return;
  } else {
  }
});
