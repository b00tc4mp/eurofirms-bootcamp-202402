fetch('http://localhost:8080/posts' {
    headers: { 'Content-Type': 'application/json', 'authorization': '6617ec0fa527d8f9fa41b633' }
})
    .then(res => res.json())
    .then(post => console.log(post))
    .catch(error => console.error(error))