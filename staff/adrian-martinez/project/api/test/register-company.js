fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'BySideCar', surnames: null, age: null, address: 'Calle Real, Nº5 - A Coruña', activity: 'Diseño Web', email: "admin@bysidecar.com", password: "12345678" })
})
    .then(res => console.log('registered'))
    .catch(error => console.error(error))