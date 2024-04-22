fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Jaime', birthdate: '2000-01-01', email: 'jaime@pan.com', username: 'jaimito', password: '123123123' })
})
    .then(res => console.log('registered'))
    .catch(error => console.error(error))