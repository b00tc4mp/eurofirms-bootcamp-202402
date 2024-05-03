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

class ReferenceError extends Error {
    constructor(message) {
        super(message)

        this.name = ReferenceError
    }
}



const errors = {
    SystemError,
    ContentError,
    DuplicityError,
    TypeError,
    RangeError,
    MatchError,
    ReferenceError
}

export default errors