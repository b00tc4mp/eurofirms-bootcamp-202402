function stringValidator(string, stringName) {
    if (typeof string !== 'string') {
        console.log(stringName + ' is not a string')

        return false
    }

    return true
}

function registerValidator(email, name, password, age) {
    var isEmailValidString = stringValidator(email, 'Email')

    if (!isEmailValidString) return false

    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))) {
        console.log('Email format is not valid')

        return false
    }

    if (email.length < 7) {
        console.log('email must have at least 7 characters')

        return false
    }

    var isNameValidString = stringValidator(name, 'Name')

    if (!isNameValidString) return false

    if (name.length < 2) {
        console.log('name must have at least 2 characters')

        return false
    }

    var isPasswordValidString = stringValidator(password, 'Password')

    if (!isPasswordValidString) return false

    if (password.length < 7) {
        console.log('password must have at least 7 characters')

        return false
    }

    if (typeof age !== 'number') {
        console.log('Age must be a number')

        return false
    }

    if (age < 18) {
        console.log('to register your age must be higher or equal that 18')

        return false
    }

    return true
}