function trim(string) {
    var result = ""
    var firstIndex = 0
    var lastIndex = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            firstIndex = i
            break
        }
    }
    for (var j = string.length - 1; j > firstIndex; j--) {
        if (string[j] !== " ") {
            lastIndex = j
            break
        }
    }
    for (var k = firstIndex; k <= lastIndex; k++) {
        result += string[k]
    }
    return result
}
var hello = "       hello World       "
console.log(trim(hello))
