fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Maria Teresa', lastname: 'Albenca', birthdate: '1984-06-05', email: 'terealbenca@gmail.com', username: 'alalluna', password: '123123123' })
})
    .then(res => console.log('user registered'))
    .catch(error => console.error(error))