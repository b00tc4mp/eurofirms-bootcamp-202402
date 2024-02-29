// presentation layer

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
        registerUser(name, birthdate, username, email, password)

        console.log('user registered')

        alert('user registered')

        form.reset()

        anchor.click()
    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }
}