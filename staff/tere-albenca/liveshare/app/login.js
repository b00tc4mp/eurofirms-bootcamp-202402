//presentation layer
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

        form.reset()

        var loginAddress = location.href

        var homeAddress = loginAddress.replace('login', 'home')

        location.href = homeAddress
    } catch (error) {
        console.error(error.message)
        
        alert(error.message)
    }
}
