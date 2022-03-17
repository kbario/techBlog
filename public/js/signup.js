const firstName = document.getElementById('first-name').value.trim();
const lastName = document.getElementById('last-name').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const passwordConfirm = document
  .getElementById('password-confirm')
  .value.trim();
const warningEl = document.getElementById('warning');

// form button
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
  if (password !== passwordConfirm) {
    warningEl.textContent = 'Passwords do not match';
    setTimeout(() => {
      warningEl.textContent = '';
    }, 2500);
    return;
  }
});
