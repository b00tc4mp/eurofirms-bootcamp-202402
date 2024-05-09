fetch('http://localhost:8080/users/661ffe73359956be9406cbc6')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))