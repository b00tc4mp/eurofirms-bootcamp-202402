
//presentation layer
var form = document.querySelector('.form')
var anchor = document.querySelector('a')

form.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = form.querySelector('#inputName')
    var name = nameInput.value

    var birthdateInput = form.querySelector('#inputBirthdate')
    var birthdate = birthdateInput.value

    var usernameInput = form.querySelector('#inputUsername')
    var username = usernameInput.value

    var emailInput = form.querySelector('#inputE-mail')
    var email = emailInput.value

    var passwordInput = form.querySelector('#inputPassword')
    var password = passwordInput.value
}

try {

    registerUser(name, birthdate, username, email, password)

    console.log('user registered')

    alert('user registered')
    form.reset()
    anchor.click()

} catch (error) {
    console.error(error.message)

    alert.error(error.message)
}