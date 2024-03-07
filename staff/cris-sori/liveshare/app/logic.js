//capa de logica
function registerUser(name, lastname, birthdate, username, email, password) {
    if (name.length < 1)
        throw new Error('El nombre tiene menos de 1 carácter')

    var nameIsBlank = true



    for (var i = 0; i < name.length && nameIsBlank; i++) {
        var char = name[i]

        if (char !== ' ')
            nameIsBlank = false
    }
    if (lastname.length < 3)
        throw new Error('El apellido tiene menos de 3 caracteres')

    var lastnameIsBlank = true

    for (var i = 0; i < lastname.length && lastnameIsBlank; i++) {
        var char = lastname[i]

        if (char !== ' ')
            lastnameIsBlank = false
    }

    if (lastnameIsBlank)
        throw new Error('El apellido está en blanco')

    if (birthdate.length !== 10)
        throw new Error('La fecha de nacimiento no tiene 10 caracteres')

    if (birthdate.includes(' '))
        throw new Error('La fecha de nacimiento tiene un espacio')

    if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
        throw new Error('Los guiones de la fecha de nacimiento no están en la posición correcta.')

    if (username.length < 3)
        throw new Error('Tu nombre de usuario es inferior a 3 carácteres')

    if (username.includes(' '))
        throw new Error('Tu nombre de usuario tiene un espacio')

    if (email.length < 6)
        throw new Error('Email es menor que 6 carácteres')

    if (!email.includes('@'))
        throw new Error('Email no tiene @')

    if (!email.includes('.'))
        throw new Error('Email no tiene .')

    if (email.lastIndexOf('.') < email.indexOf('@'))
        throw new Error('Email tiene . antes de @')

    if (email.lastIndexOf('.') - email.indexOf('@') < 2)
        throw new Error('El email tiene . junto a @')

    if (email.length - 1 - email.indexOf('.') < 2)
        throw new Error('El dominio de email tiene menos de 2 caracteres.')

    if (email.includes(' '))
        throw new Error('Email tiene un espacio')

    if (password.length < 8)
        throw new Error('Contraseña es menor de 8 carácteres')

    if (password.includes(' '))
        throw new Error('Contraseña tiene espacios')
    // for (var i = 0; i < users.length; i++) {
    //     var user = users[i]

    //     if (user.email === email)
    //         throw new Error('El usuario ya existe')
    // }
    var user = findUser(function (user) {
        return user.username === username || user.email === email
    })
    var user = {
        name: name,
        lastname: lastname,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }

    insertUser(user)
}


function loginUser(username, password) {
    if (username.length < 3)
        throw new Error('username is lower than 3 characters')

    if (username.includes(' '))
        throw new Error('username has a space character')

    if (password.length < 8)
        throw new Error('password is lower than 8 characters')

    if (password.includes(' '))
        throw new Error('password has space character')


    var user = findUser(function (user) {
        return user.username === username
    })

    if (user === undefined)
        throw new Error('user not found')

    if (user.password !== password)
        throw new Error('wrong password')

    sessionStorage.userId = user.id
}

function retrieveUser() {
    var user = findUser(function (user) {
        return user.id === sessionStorage.userId
    })

    if (user === undefined)
        throw new Error('user not found')
    if (user.password !== password)
        throw new Error('wrong password')
    sessionStorage.userId = user.id
}

