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

    if (password.length < 8)
    throw new Error("La contraseña es muy corta")

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
}