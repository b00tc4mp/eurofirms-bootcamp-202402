function endsWith(string, stringCompared, end = string.length - 1) {
    for (var i = 0; i < stringCompared.length; i++) {
        if (string[end - i] !== stringCompared[stringCompared - 1 - i])
            return false
    }
    return true
}