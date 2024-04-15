fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'authorization': '6617d38e7197d5c4d62dc42d' },
})
    .then(res => res.json())
    .then(posts => console.log(posts))

    .catch(error => console.error(error))