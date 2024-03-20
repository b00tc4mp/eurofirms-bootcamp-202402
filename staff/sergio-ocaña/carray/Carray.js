function Carray() {
    var elements = arguments
    for (var i = 0; i < elements.length; i++) {
        this[i] = elements[i]
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
    result = new Carray
    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        var callbick = callback(element)
        result[i] = callbick
        result.length++
    }
    return result
}

module.exports = Carray