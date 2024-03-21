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

Carray.prototype.findIndex = function findIndexElements(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i]))
            return i
    }

    return -1
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

Carray.prototype.insert = function insertElements(position) {
    for (var i = arguments.length - 1; i > 0; i--) {
        var element = arguments[i]
        for (var j = this.length; j > position; j--) {
            this[j] = this[j - 1]
        }
        this[position] = element
        this.length++
    }
}
Carray.prototype.push = function insertElement() {
    var element = arguments
    for (var i = 0; i < element.length; i++) {
        this[length] = element[i]
        this.length++
    }
}

Carray.prototype.filter = function filter(callback) {
    var filtered = new Carray
    for (var i = 0; i < this.length; i++) {
        result = callback(this[i])
        if (result) {
            filtered[filtered.length] = this[i]
            filtered.length++
        }
    } return filtered
}
Carray.prototype.every = function every(callback) {
    for (var i = 0; i < this.length; i++) {
        if (!callback(this[i])) return false
    }
    return true
}

Carray.prototype.includes = function includes(value, fromIndex = 0) {
    for (var i = fromIndex; i < this.length; i++) {
        test = this[i]
        if (value === test) {
            return true
        }
    }
    return false
}

Carray.prototype.indexOf = function indexOf(value) {
    for (var i = 0; i < this.length; i++) {
        if (value == this[i]) {
            return i
        }
    } return -1
}

Carray.prototype.reverse = function reverse() {
    var reverseCarray = { ...this }
    for (i = 0; i < this.length; i++) {
        this[i] = reverseCarray[this.length - 1 - i]
    }
}




module.exports = Carray