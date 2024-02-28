
//presentation layer
var form = document.querySelector('.form')

form.onsubmit = function (event) {

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