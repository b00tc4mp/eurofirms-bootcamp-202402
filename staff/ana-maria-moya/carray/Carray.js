function Carray() {
    var elements = arguments
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        this[i] = element
    }
    this.length = elements.length
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

Carray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}

module.exports = Carray