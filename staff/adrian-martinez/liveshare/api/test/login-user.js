fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'pepitogrilloGemelo', password: '1231231232' })
})
    .then(res => res.json())
    .then(userId => console.log(userId))
    .catch(error => console.error(error))