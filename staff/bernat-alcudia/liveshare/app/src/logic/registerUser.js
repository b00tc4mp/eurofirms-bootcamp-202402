function registerUser(name, birthdate, email, username, password) {
    // validateName(name)
    // validateBirthdate(birthdate)
    // validateEmail(email)
    // validateUsername(username)
    // validatePassword(password)

    return fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, birthdate, email, username, password })
    })

        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (res.status === 201) {
                return
            }

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })


}

export default registerUser