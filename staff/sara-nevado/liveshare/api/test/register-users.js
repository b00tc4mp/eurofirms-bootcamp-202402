fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Alicia Expulsada', birthdate: '2000-01-01', email: 'alicia@hotmail.com', username: 'aliciaexpulsada', password: '123123123' })
})
    .then(res => console.log('registered'))
    .catch(error => console.error(error))