console.log('----- stats javascript file -----');


async function chartFormHandler(event) {
  event.preventDefault();

  console.log('----------- chart_post.js ----------')

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const distance = document.querySelector('input[name="post-distance"]').value.trim();
  const time = document.querySelector('input[name="post-time"]').value.trim();
  const weight = document.querySelector('input[name="post-weight"]').value.trim();
  const sets = document.querySelector('input[name="post-sets"]').value.trim();
  const reps = document.querySelector('input[name="post-reps"]').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'GET',
    body: JSON.stringify({
      title,
      distance,
      time,
      weight,
      sets,
      reps
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/stats/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.chartLink').addEventListener('submit', chartFormHandler);