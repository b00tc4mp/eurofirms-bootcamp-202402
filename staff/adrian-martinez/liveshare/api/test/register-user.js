fetch('http://localhost:8080/userss', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Jaime', birthdate: '2000-01-01', email: 'jaime@pan.com', username: 'jaimito', password: '123123123' })
})
    .then(res => {
        if(res.status === 500) {
            res.json()
            .then(error => console.log(error.message))

            return
        }

        if(res.status === 404){ 
            console.log('Path not found')

            return
        }

        console.log('registered')
    })
    .catch(error => console.error(error))