fetch('http://127.0.0.1:8989/users/663b9e3ec9ea935164211c54')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))