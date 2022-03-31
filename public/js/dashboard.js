function toggleContent(e) {
  e.currentTarget.parentNode.parentNode.parentNode.children[1].classList.toggle(
    'hidden'
  );
  e.currentTarget.children[0].classList.toggle('-rotate-90');
}

async function del(id) {
  const response = await fetch(`/api/posts/${id}`, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    const data = await response.json();
  }
}
