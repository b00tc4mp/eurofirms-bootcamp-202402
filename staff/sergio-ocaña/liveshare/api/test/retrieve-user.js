fetch('http://localhost:8080/users/661921ccda5eee762a343a6a')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))