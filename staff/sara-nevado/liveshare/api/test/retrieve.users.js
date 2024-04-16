fetch('http://localhost:8080/users/6619xxxxxxxxxx')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))