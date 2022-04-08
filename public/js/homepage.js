async function comment(e, postId, userId) {
  e.preventDefault();
  const comment = e.target.parentNode.children[0].value.trim();

  if (comment) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({
        content: comment,
        post_id: postId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      const error = await response.json();
      console.log(error);
      console.log(response);
    }
  }
}

function showContents(event) {
  event.preventDefault();

  if (
    event.target === event.currentTarget ||
    event.target === event.currentTarget.children[0] ||
    event.target === event.currentTarget.children[0].children[0] ||
    event.target === event.currentTarget.children[0].children[1].children[0] ||
    event.target === event.currentTarget.children[0].children[1].children[1]
  ) {
    event.currentTarget.children[1].classList.toggle('hidden');
    event.currentTarget.children[1].classList.toggle('flex');
  }
}
