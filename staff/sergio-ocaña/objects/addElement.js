function addElement(object, element, position) {
    for (k = object.legth; position < k; k--) {
        object[k] = object[k - 1]
    }
    object[position] = element
    object.legth++
    return object
}

