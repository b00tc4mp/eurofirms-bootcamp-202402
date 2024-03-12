function split(string, separator, limit) {
    var result = []
    var acumulatedString = ''

    for (var i = 0; i < string.length && result.length < limit; i++) {
        if (separator.length > 1) {
            var separatorCompare = ''
            for (var j = o; i < separator.length + i; j++) {
                separatorCompare += string[j]
            }

            if (separator === stringToCompare) {
                result[result.length] = acumulatedString

                StringToCompare = ''

                AcomulatedString = ''
            }
            else {
                acumulatedString += string[i]
            }

        }

        var character = string[i]

        if (character === separator || ) {
            result[result.length] = acumulatedString
            acumulatedString = ''

        }
        else {
            acumulatedString += character
        }
        if (result.length < limit) {
            result[result.length] = acumulatedString
        }
        return result

    }

    console.log('FUNCTION SPLIT')

    console.log('cASE 1 : SPLIT THE STRING WITH " " SEPARATOR')

    var hello = 'Hello world to the people'

    var result = split(hello, ' ')

    console.log({ expected: ['Hello', 'world', 'to', 'the', 'people'], received: result })

    var hello2 = 'Hello world to the people'

    console.log('CASE 2: split the string with')

    console.log({ expected: ['Hello', 'world'], received: result })

    var hello3 = 'Hello - world - to - the - people-around'

    var result3

    console.log('CASE 3: split the string with')

    console.log({ expected: ['Hello', 'world'], received: result })