fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'peterpan', password: '123123123' })
})
    .then(res => console.log('logged in'))
    .catch(error => console.error(error))