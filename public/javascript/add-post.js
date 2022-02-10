async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  // const post_url = document.querySelector('input[name="post-url"]').value;
  const distance = document.querySelector('input[name="post-distance"]').value;
  const time = document.querySelector('input[name="post-time"]').value;
  const weight = document.querySelector('input[name="post-weight"]').value;
  const sets = document.querySelector('input[name="post-sets"]').value;
  const reps = document.querySelector('input[name="post-reps"]').value;

  console.log('----------- add-post.js ----------')

  const response = await fetch(`/api/posts`, {
  
    method: 'POST',
    body: JSON.stringify({
      title,
      distance,
      time,
      weight,
      sets,
      reps
     // post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);