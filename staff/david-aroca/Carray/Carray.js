function Carray() {
    var elements = arguments

    for (var i = 0; i < Carrayarray.length; i++) {
        var element = element[i];

        this[i] = element
    }
    this.length = element.length
}

// Carray.prototype.array.forEach(element => {});

Carray.prototype.array.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        callback(element)
    }
}

Carray.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        var matches = callback(element)

        if (matches)
            return element

    }
}

Carray.prototype.map = function (callback) {
    var results = new Carray

    for (var i = 0; i < array.length; i++) {
        const element = this[i];

        var mappedElemet = callback(element)

        results[results.length] = mappedElemet
        results.length++

    }

    return results
}

module.exports = Carray
