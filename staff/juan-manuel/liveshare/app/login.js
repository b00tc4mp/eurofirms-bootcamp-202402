var form = document.querySelector('.form')

form.onsubmit = function (event) {
    event.preventDefault()

    var usernameInput = form.querySelector('#username')
    var username = usernameInput.value

    var passwordInput = form.querySelector('#password')
    var password = passwordInput.value

    try {
        loginUser(username, password)

        console.log('Usuario ha iniciado sesión')

        alert('Usuario ha iniciado sesión')

        form.reset()

    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }
}