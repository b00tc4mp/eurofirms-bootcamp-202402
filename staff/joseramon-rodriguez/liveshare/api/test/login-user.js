fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'pepitogrillo', password: '123123123' })
})
    .then(res => res.json())
    .then(event => console.log(event))
    .catch(error => console.error(error))