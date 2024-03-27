// data layer

var users = [] // users es un variable global localstorage
// presengtation layer

var form = document.querySelector('.form')

//Devuelve el primer elemento del documento (utilizando 
//un recorrido primero en profundidad pre ordenado de los nodos del documento) 
//que coincida con el grupo especificado de selectores

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

    // business layer(logic)

    try { //marca un bloque de instrucciones a intentar que pueden causar alguna excepción, y declarar una 
        //o más respuestas en caso de que una excepción sea arrojada.
        if (name.length < 1)
            throw new Error('name is lower than 1 character')

        var nameIsBlank = true

        for (var i = 0; i < name.length && nameIsBlank; i++) {
            var char = name[i]

            if (char !== ' ')
                nameIsBlank = false
        }
        if (nameIsBlank)
            throw new Error('name is blank')

        if (birthdate.length !== 10)
            throw new Error('birthdate does not have 10 characters')

        if (birthdate.includes(' '))
            throw new Error('birthdate has a space character')

        if (birthdate.indexOf('-') !== 4 || birthdate.lastIndexOf('-') !== 7)
            throw new Error('birthdate dashes are not in corect position')

        // TODO check that birthdate has only 2 dashes
        // TODO check that birthdate has no alphabet characters (only numbers and 2 dashes)
        // TODO check that birthdate is equal or greater than 18 years old

        if (username.length < 3)
            throw new Error('username is lower than 3 characters')

        if (username.includes(' '))
            throw new Error('username has a space character')

        if (email.length < 6)
            throw new Error('email is lower than 6 characters')

        if (!email.includes('@'))// tiene que tener @
            throw new Error('email has no @')

        if (!email.includes('.'))
            throw new Error('email has no .')

        if (email.lastIndexOf('.') < email.indexOf('@'))// tiene que tener . despues @
            throw new Error('email has . before @')

        if (email.lastIndexOf('.') - email.indexOf('@') < 2)
            throw new Error('email has . next to @')

        if (email.length - 1 - email.indexOf('.') < 2)
            throw new Error('email domain is lower than 2 characters')

        if (email.includes(' '))
            throw new Error('email has space character')

        if (password.length < 8)
            throw new Error('password is lower than 8 characters')

        if (password.includes(' '))
            throw new Error('password has space character')

        for (var i = 0; i < users.length; i++) {
            var user = users[i]

            if (user.email === email)
                throw new Error('user already exists')
        }


        var user /*object*/ = {
            // donde se registra los usarios
            name: name, //propiedades
            birthdate: birthdate,
            username: username,
            email: email,
            password: password

        }
        //console.log(user) // to print user 

        users[users.length] = user

        console.log('user registered')
        
        alert('user registered')

        form.reset() // para clean this espace after write inputes
    } catch (error) {
        console.error(error.message)

        alert(error.message)
    }
}