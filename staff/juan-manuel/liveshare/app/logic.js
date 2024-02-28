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
        throw new Error('El nombre es blanco')

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

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            throw new Error('El usuario ya existe')
    }

    var user = {
        name: name,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }

    users[users.length] = user
}