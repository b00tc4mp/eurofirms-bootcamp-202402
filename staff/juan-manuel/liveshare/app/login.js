var form = document.querySelector('.form')

form.onsubmit = function (event) {
    event.preventDefault()

    var usernameInput = form.querySelector('#username')
    var username = usernameInput.value

    var passwordInput = form.querySelector('#password')
    var password = passwordInput.value

    try {
        loginUser(username, password)

        sessionStorage.username = username

        console.log('Usuario ha iniciado sesión')

        form.reset()

        var Loginaddress = location.href
        var homeAddress = Loginaddress.replace("login", "home")
        location.href = homeAddress

    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }
}