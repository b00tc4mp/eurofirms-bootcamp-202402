fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Peter Pan', birthdate: '2000-01-01', email: 'peter@pan.com',
    username: 'peterpan', password: '123123123' })
})
        .then(res => console.log('registered'))
        .catch(error => console.error(error))