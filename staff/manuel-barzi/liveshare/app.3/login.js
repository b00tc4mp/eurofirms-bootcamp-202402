// presentation layer

var form = document.querySelector('.form')

form.onsubmit = function (event) {
    event.preventDefault()

    var usernameInput = form.querySelector('#username')
    var username = usernameInput.value

    var passwordInput = form.querySelector('#password')
    var password = passwordInput.value

    try {
        if (username.length < 3)
            throw new Error('username is lower than 3 characters')

        if (username.includes(' '))
            throw new Error('username has a space character')

        if (password.length < 8)
            throw new Error('password is lower than 8 characters')

        if (password.includes(' '))
            throw new Error('password has space character')

        var user

        for (var i = 0; i < users.length; i++) {
            var user2 = users[i]

            if (user2.username === username) {
                user = user2

                break
            }
        }

        if (user === undefined)
            throw new Error('user not found')

        if (user.password !== password)
            throw new Error('wrong password')

        console.log('user logged in')

        alert('user logged in')

        form.reset()

        // TODO navigate to home
    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }
}