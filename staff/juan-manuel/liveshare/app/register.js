var form = document.querySelector('.form')
var anchor = document.querySelector('a')

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
        logic.registerUser(name, birthdate, username, email, password)

        console.log('Usuario Registrado')

        alert('Usuario Registrado')

        form.reset()

        anchor.click()
    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }
}