// bussines layer(logic)

function registerUser(name, birthdate, username, email, password) {

    if (name.length < 1)
        throw new Error('name is lower than 1 character')

    var nameIsBlank = true

    for (var i = 0; name.length && nameIsBlank; i++) {
        var char = name[i]

        if (char !== ' ') {
            nameIsBlank = false
        }
        if (nameIsBlank) {

        }

    }


}