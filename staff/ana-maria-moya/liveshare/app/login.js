// presentation layer
var form = document.querySelector('.form')

form.onsubmit = function (event) {
    event.preventDefault()

    var usernameInput = form.querySelector('#username')
    var username = usernameInput.value

    var passwordInput = form.querySelector('#password')
    var password = passwordInput.value

    try {
        logic.loginUser(username, password)

        console.log('user logged in')

        alert('user logged in')

        form.reset()
        var loginAdress = location.href 
        var homeAdress = loginAdress.replace('login', 'home')
        location.href =homeAdress

        // TODO navigate to home
    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }
}