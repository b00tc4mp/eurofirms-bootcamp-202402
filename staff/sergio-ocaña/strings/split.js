function split(string, separator, limit = string.length) {
    var result = []
    var add = ""
    var test = ""

    for (var j = 0; j < limit; j++) {

        if (separator.length > 1) {
            if (separator[0] === string[j]) {
                for (var i = 0; i < separator.length; i++) {
                    test += string[i + j]
                    if (string[j + i] !== separator[i]) {
                        add += test
                        test = ""
                        j += i + 1
                        break

                    } if (separator === test) {
                        test = ""
                        result.push(add)
                        add = ""
                        j += separator.length
                    }
                }
            }
        }
        if (separator === '')
            result.push(string[j])

        if (string[j] === separator) {

            result.push(add)
            add = ""
        }
        else {
            add += string[j]
        }
    }
    if (separator.length > 1) {
        result.push(add)
        add = ""
    }
    if (separator !== "" && add !== '') { result.push(add) }
    return result
}
var sssssssssssssstring = "The morning is upon us. Be aware about it"
var stringlong = "La casa - es tan pequeña - que no se puede vender"

console.log(split(sssssssssssssstring, ''))
console.log(split(sssssssssssssstring, ' ', 12))
console.log(split(stringlong, ' - '))