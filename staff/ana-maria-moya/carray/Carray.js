function Carray() {
    var elements = arguments
    for(var i = 0; i <elements.length; i++) {
        var element = elements[i]

        this[i] = element
    }
    this.length = element.length
}

Carray.prototype.find = function (callback) {
    for (var i = 0; i< this.length; i++) {
        var element = this[i]

        var matches = callback(element)

        if (matches)
        return element
    }
}

Carray.prototype.map = function (callback) {
    var results = new Carray

    for (var i = 0; i < this.length; i++) {
        var elemnt = this[i]

        var mappedElemnt = callback(element)

        result[results.length] = mappedElement
        results.length++

    }
    return results
}

module.exports = Carray