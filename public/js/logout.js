// global vars

// form button
const logoutBtn = document.getElementById('navbar-logout-btn');

logoutBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    const thing = await response.json();
    console.log(thing);
  }
});
