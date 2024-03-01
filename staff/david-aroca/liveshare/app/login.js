// presentation layer

var form = document.querySelector('.form')

form.onsubmit = function (event) {
    event.preventDefault()

    var usernameInPut = form.querySelector('#username')
    var username = usernameInPut.value

    var passwordInput = form.querySelector('#password')
    var password = passwordInput.value


    try {
        loginUser(username, password)

        console.log('user logged in')

        alert('user logged in')

        form.reset()


    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }

}