fetch('http://localhost:8080/users/661e11134af4647e8116c9b5')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))