fetch('http://localhost:8080/post/661cf737ea8f648ccb16c9b6', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'authorization': 'bearer 6617d38e7197d5c4d62dc42d' },
})
    .then(res => res.json())
    .then(post => console.log(post))

    .catch(error => console.error(error))