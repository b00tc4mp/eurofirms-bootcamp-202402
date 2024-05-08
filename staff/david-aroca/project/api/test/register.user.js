fetch('http://localhost:4025/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'JOSERAMON', birthdate: '2000-01-01', email: 'JOSE@RAMON.COM', username: 'JOSERAMON', password: '123123123' })
})
    .then(res => console.log('registered'))
    .catch(error => console.error(error))