fetch('http://localhost:8989/career', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Ciberseguridad', description: 'Con esta FP superior puedes hackear', certification: 'https://founderz.com/blog/wp-content/uploads/2023/03/5-amenazas-de-ciberseguridad-2023.jpg'})
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