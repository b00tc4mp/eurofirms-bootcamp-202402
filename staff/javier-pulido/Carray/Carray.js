function Carray() {
    var elements = arguments

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        this[i] = element
    }

    this.length = elements.length
}

Carray.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element)
    }
}

Carray.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var matches = callback(element)

        if (matches)
            return element
    }
}

Carray.prototype.map = function (callback) {
    var results = new Carray

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var mappedElement = callback(element)

        results[results.length] = mappedElement
        results.length++
    }

    return results
}

//TODO Revisar este ejercicio Reverse
Carray.prototype.reverse = function () {
    var iterations = Math.floor(this.length / 2)

    for (var i = 0; i < iterations; i++) {
        var element = this[i]
        this[i] = this[this.length - 1 - i]

        this[this.length - 1 - i] = element
    }

    return this
}
//--------------------------------------------------------------------------------------/
Carray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}
//--------------------------------------------------------------------------------------/
Carray.prototype.join = function (separator = ',') {
    var result = ''

    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        if (i !== 0) {

            result = result + separator + element
        }
        else {
            result = element
        }
    }
    return result
}




module.exports = Carray 