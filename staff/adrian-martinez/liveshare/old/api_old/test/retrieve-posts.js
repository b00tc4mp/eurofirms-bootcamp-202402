fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: { "authorization": "6618df34e4fca262cd8dd038" },
})
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error))