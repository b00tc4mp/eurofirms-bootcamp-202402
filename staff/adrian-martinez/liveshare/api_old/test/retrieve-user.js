fetch('http://localhost:8080/users/6618df34e4fca262cd8dd038')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))