function titleValidator(string) {
    var stringResult = stringValidator(string, 'Title')
    if (!stringResult.isValid) return stringResult
}



function stringValidator(string, stringName) {
    if (typeof string !== 'string') {
        console.log(stringName + ' is not a string')

        return false
    }

    return true
}

function lengthValidator(string, validLength, stringName) { }


function map(numbers, callback) {

    for (i = 0; < numbers.length ;)
}
