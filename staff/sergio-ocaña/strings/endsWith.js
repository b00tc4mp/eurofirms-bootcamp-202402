function endsWith(string, stringCompared = 'undefined', end = string.length) {
    if (stringCompared.length > end)
        return false
    if (end > string.length)
        end = string.length
    for (var i = 0; i < stringCompared.length; i++) {
        if (string[end - i - 1] !== stringCompared[stringCompared.length - 1 - i])
            return false
    }
    return true
}

var sambaDaBahia = 'Tê tê têTetetê tete Tê tê tê tetê tetetêTê tê têTetetê tetêTê tê tê tetê tetetê Samba da Bahia'
console.log('CASE 1 endsWith "Bahia" true ')
console.log(endsWith(sambaDaBahia, 'Bahia'))

console.log('CASE 2 "da" in index 88 true')
console.log(sambaDaBahia.length)
console.log(endsWith(sambaDaBahia, 'da', 88))

console.log('CASE 3 "da" in index 87 false')
console.log(endsWith(sambaDaBahia, 'da', 87))

console.log('CASE 4 index to compare less than stringToCompare.length')
console.log(endsWith(sambaDaBahia, 'eT', 1))

console.log('CASE 5 "da" in index 100 true')
console.log(endsWith(sambaDaBahia, 'Bahia', 100))


