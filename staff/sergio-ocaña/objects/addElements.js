function insertElement(object, position, element) {
    for (var i = object.length; i > position; i--) {
        object[i] = object[i - 1]
    }
    object[position] = element
    object.length++
}

function insertElements(object, position) {
    for (var j = 2; j < arguments.length; j++) {
        var element = arguments[j]
        insertElement(object, position, element)
    }
}

