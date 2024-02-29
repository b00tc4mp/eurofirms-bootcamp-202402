// presentation layer

var from = document.querySelector('.form')

from.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = form.querySelector('#name')
    var name = nameInput()

    var birthdateInput = form.querySelector('#birthdate')
    var birthdate = birthdateInput

    var usernameinPut = form.querySelector('#username')
    var username = usernameinPut.value

    var emailInput = form.querySelector('#email')
    var email = emailInput.value

    var passwordInput = form.querySelector('#password')
    var password = passwordInput.value


    try {
        registerUser(name, birthdate, username, email, password)
        console.log('user registered')
        alert('user registered')
        form.reset()
    } catch {
        console.error(error.mesage)

        alert(error.mesage)
    }
}
