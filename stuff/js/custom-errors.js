class PepitoError extends Error {
    constructor(message) {
        super(message)

        this.name = PepitoError.name
    }
}

class JuanitoError extends Error {
    constructor(message) {
        super(message)

        this.name = JuanitoError.name
    }
}

var errors = {
    PepitoError,
    JuanitoError
}



errors['PepitoError']
// class PepitoError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = PepitoError.name
//     }
// }

errors['JuanitoError']
// class JuanitoError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = JuanitoError.name
//     }
// }


var error = 'PepitoError'
errors[error]
// class PepitoError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = PepitoError.name
//     }
// }

error = 'JuanitoError'
errors[error]
// class JuanitoError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = JuanitoError.name
//     }
// }