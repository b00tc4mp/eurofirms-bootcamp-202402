class SystemError extends Error {
    constructor(message) {
        super(message)

        this.name = SystemError.name
    }
}

class ContentError extends Error {
    constructor(message) {
        super(message)

        this.name = ContentError.name
    }
}

class DuplicityError extends Error {
    constructor(message) {
        super(message)

        this.name = DuplicityError.name
    }
}

class MatchError extends Error {
    constructor(message) {
        super(message)

        this.name = MatchError.name
    }
}

//Bucket. Otra forma de hacerlo
/* export = {
    SystemError,
    ContentError,
    DuplicityError,
    TypeError,
    MatchError
} */
const errors = {
    SystemError,
    ContentError,
    DuplicityError,
    TypeError,
    RangeError,
    MatchError
}

export default errors