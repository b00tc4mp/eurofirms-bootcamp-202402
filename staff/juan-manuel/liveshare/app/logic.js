function registerUser(name, birthdate, username, email, password) {
    if (name.length < 1)
        throw new Error('El nombre tiene menos de 1 carácter')

    var nameIsBlank = true

    for (var i = 0; i < name.length && nameIsBlank; i++) {
        var char = name[i]

        if (char !== ' ')
            nameIsBlank = false
    }

    if (nameIsBlank)
        throw new Error('Nombre es blanco')

    if (birthdate.length !== 10)
        throw new Error('La fecha de nacimiento no tiene 10 caracteres')

    if (birthdate.includes(' '))
        throw new Error('Fecha de nacimiento tiene espacio en blanco')

    if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
        throw new Error('Los guiones de fecha de nacimiento no están en la posición correcta')

    if (username.length < 3)
        throw new Error('El nombre de usuario tiene menos de 3 caracteres')

    if (username.includes(' '))
        throw new Error('El nombre de usuario tiene espacio en blanco')

    if (email.length < 6)
        throw new Error('Email es más pequeño que 6 carácteres')

    if (!email.includes('@'))
        throw new Error('El correo electrónico no tiene @')

    if (!email.includes('.'))
        throw new Error('El correo electrónico no tiene .')

    if (email.lastIndexOf('.') < email.indexOf('@'))
        throw new Error('El correo electrónico tiene . antes @')

    if (email.lastIndexOf('.') - email.indexOf('@') < 2)
        throw new Error('El correo electrónico tiene . junto a @')

    if (email.length - 1 - email.indexOf('.') < 2)
        throw new Error('El nombre de dominio de correo electrónico tiene menos de 2 caracteres')

    if (email.includes(' '))
        throw new Error('Email tiene un espacio')

    if (password.length < 8)
        throw new Error('La contraseña tiene menos de 8 caracteres')

    if (password.includes(' '))
        throw new Error('La contraseña tiene espacio')

    var user = findUser(function (user) {
        return user.username === username || user.email === email
    })

    if (user !== undefined)
        throw new Error('El usuario ya existe')

    var user = {
        name: name,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }

    insertUser(user)
}

function loginUser(username, password) {
    if (username.length < 3)
        throw new Error('El nombre de usuario tiene menos de 3 caracteres')

    if (username.includes(' '))
        throw new Error('El nombre de usuario tiene espacio')

    if (password.length < 8)
        throw new Error('Contraseña es más pequeña que 8')

    if (password.includes(' '))
        throw new Error('Contraseña tiene espacio')

    var user = findUser(function (user) {
        return user.username === username
    })

    if (user === undefined)
        throw new Error('Usuario no encontrado')

    if (user.password !== password)
        throw new Error('Contraseña errónea')

    sessionStorage.userId = user.id
}

function retrieveUser() {
    var user = findUser(function (user) {
        return user.id === sessionStorage.userId
    })

    if (user === undefined)
        throw new Error('Usuario no encontrado')

    return user
}

function logoutUser() {
    delete sessionStorage.userId
}