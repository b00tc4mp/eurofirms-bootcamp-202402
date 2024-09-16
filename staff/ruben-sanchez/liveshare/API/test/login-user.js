fetch('http://loclahost:8080/login',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username: 'pepitogrillo', password: '123123123'})

})
    .then(res => console.log(res))
    .then(userId => console.log(userId))
    .catch(error => console.error(error)) 