
//object to store the objects -> user

//presentation layer
var form = document.querySelector('.form')  //grabs from de document the class -> form
var anchor = document.querySelector('a')
form.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = form.querySelector('#name') //grabs from the class -> form the field of id -> 'name' 
    var name = nameInput.value                  //grabs from the field with the id -> 'name' the property -> value

    var birhtdateInput = form.querySelector('#birthdate')
    var birthdate = birhtdateInput.value

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