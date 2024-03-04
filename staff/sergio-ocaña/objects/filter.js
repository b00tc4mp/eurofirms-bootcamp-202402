function filter(object, value, filter, callback) {
    filtered = {}
    var j = 0
    for (var i = 0; i < object.length; i++) {
        result = callback(object[i], value, filter)
        if (result) {
            filtered[j] = object[i]
            j++
            filtered.length++
        }
    }
}
var callback = function (element, value, filter) {

    if (typeof value === "num") {
        if (filter === "mayor") {
            if (element.length > value)
                return true

        }
        if (filter === "menor")
            if (element.length < value)
                return true
        if (filter === "igual")
            if (element.length = value)
                return true
            else { return false }

    }
    if (typeof value === "string") {
        for (var i = 0; i <= value.length; i++)
            if (element.charAt[i] !== value.charAt[i])
                return false

    }
}
// TODO check