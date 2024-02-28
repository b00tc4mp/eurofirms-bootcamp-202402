var users = []

var form = document.querySelector('.form')

form.onsubmit = function (event) {

    event.preventDefault()

    var nameInput = form.querySelector('#name')
    var name = nameInput.value

    var birthdateInput = form.querySelector('#birthdate')
    var birthdate = birthdateInput.value

    var usernameInput = form.querySelector('#username')
    var username = usernameInput.value

    var emailInput = form.querySelector('#email')
    var email = emailInput.value

    var passwordInput = form.querySelector('#password')
    var password = passwordInput.value

    try {

    if (name.length < 1)
    throw new Error("El nombre es muy corto")

    var nameIsBlank = true

    for (var i = 0; i < name.length && nameIsBlank; i++){
        var char = name [i]

        if (char !== " ")
        nameIsBlank = false
    }

    for (var i = 0; i < password.length; i++) {
        var char = password[i]

        if (char === " ")
        throw new Error("Password tiene espacio")
    }

    if (nameIsBlank)
    throw new Error("nombre es blanco")
    if(email.length < 6)
    throw new Error("El email no es correcto")
    if (!email.includes("@"))
        throw new Error("Te has olvidado el @")
    if (!email.includes("."))
        throw new Error ("No has puesto el .")
    if (email.indexOf(".") < email.indexOf("@"))
        throw new Error ("email tiene . después de @")
    if (email.indexOf(".") - email.indexOf("@") <2)
        throw new Error("email tiene . después de @")
    if (password.length < 8)
        throw new Error("password too short")
    for (var i = 0; i < password.length; i++) {
        var char = password [i]

        if (char === " ")
            throw new Error ("Password tiene un espacio.")
    }

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
        throw new Error("El usuario ya existe")
    }

    var user = {
        name: name,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }

    users[users.length] = user

    console.log("Usuario Registrado")

    alert("usuario registrado")
} catch (error) {
    console.error(error.message)

    alert(error.message)
}
}