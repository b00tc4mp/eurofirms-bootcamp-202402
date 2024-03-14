function replace(string, pattern, toReplace) {
    var stringToCompare = string
    var acumulated = ""
    var test = ""
    var firstInteraction
    for (var k = 1; k < arguments.length - 1 && arguments[k + 1] !== undefined; k += 2) {
        firstInteraction = true
        for (var j = 0; j < stringToCompare.length; j++) {
            if (arguments[k][0] === string[j] && firstInteraction) {
                test = ""
                for (var i = 0; i < arguments[k].length; i++) {
                    test += string[j]
                    if (string[j + i] !== arguments[k][i]) {
                        acumulated += test
                        j += i + 1
                    }
                    if (test === arguments[k]) {
                        acumulated += arguments[k + 1]
                        j = arguments[k].length
                        firstInteraction = false
                    }
                }
            } else {
                acumulated += string[j]
            }
        }
        stringToCompare = acumulated
        acumulated = ""
    }
    return stringToCompare

}
var sambaDaBahia = 'Tê tê têTetetê tete Tê tê tê tetê tetetêTê tê têTetetê tetêTê tê tê tetê tetetê Samba da Bahia'
console.log('CASE:1 Replace "te" for "dog" only')
console.log(replace(sambaDaBahia, 'te', 'dog'))