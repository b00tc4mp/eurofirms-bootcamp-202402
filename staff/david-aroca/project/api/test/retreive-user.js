fetch('http://localhost:4025/users/')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))