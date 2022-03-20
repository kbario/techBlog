const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const warningEl = document.getElementById('warning');

// form button
const signupBtn = document.getElementById('signup-btn');

function showWarning(message) {
  warningEl.innerHTML = message;
  setTimeout(() => {
    warningEl.innerHTML = '';
  }, 2500);
}

signupBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  if (
    firstName.value.trim() === '' ||
    lastName.value.trim() === '' ||
    username.value.trim() === '' ||
    email.value.trim() === '' ||
    password.value.trim() === '' ||
    passwordConfirm.value.trim() === ''
  ) {
    showWarning('Please fill out all sections');
    return;
  } else if (password.value.trim() !== passwordConfirm.value.trim()) {
    showWarning('Passwords do not match');
    return;
  } else {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({
        first_name:
          firstName.value.charAt(0).toUpperCase().trim() +
          firstName.value.slice(1).trim(),
        last_name:
          lastName.value.charAt(0).toUpperCase().trim() +
          lastName.value.slice(1).trim(),
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // document.location.replace('/');
    } else {
      response.json().then((response) => {
        if (response.errors[0].message === 'email must be unique') {
          showWarning('This user already exists');
          return;
        }
      });
    }
  }
});
