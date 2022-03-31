function showWarning(element, message) {
  element.innerHTML = message;
  setTimeout(() => {
    element.innerHTML = '';
  }, 3000);
}

async function createPost(e) {
  e.preventDefault();
  const title = document.getElementById('title-input').value.trim();
  const content = document.getElementById('content-input').value.trim();
  const warningEl = document.getElementById('create-warning');

  if (title && content) {
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      const error = await response.json();
      console.log(error);
      console.log(response);
    }
  } else {
    showWarning(
      warningEl,
      'Please fill in both Title and Content to save this post.'
    );
  }
}
