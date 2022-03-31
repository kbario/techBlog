// form inputs
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

const loginWarningEl = document.getElementById('login-warning');

// form button
const loginLoginBtn = document.getElementById('login-btn');

function showWarning(message) {
  loginWarningEl.innerHTML = message;
  setTimeout(() => {
    loginWarningEl.innerHTML = '';
  }, 2500);
}

loginLoginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  if (loginEmail.value.trim() === '' || loginPassword.value.trim() === '') {
    loginWarningEl.innerHTML = 'Please provide both an email and password';
    setTimeout(() => {
      loginWarningEl.innerHTML = '';
    }, 2500);
    return;
  } else {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: loginEmail.value.trim(),
        password: loginPassword.value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      const data = await response.json();
      if (data.message === 'Incorrect email. Please try again!') {
        showWarning('There is no user with that email');
        return;
      } else {
        showWarning(data.message);
      }
    }
  }
});
