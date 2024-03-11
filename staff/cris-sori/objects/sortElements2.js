/**
 * 
 * function that will sort the properties of the object
 * converted to string sorted by ascending order
 * comparing their UTF-16 values
 * 
 * This function will return the original array sorted not a copy  
 * 
 * order blank properties->defined properties ->undefined properties 
 */

function sortElements2(object) {
    //TODO
    var definedProperties = { length: 0 }
    var blankProperties = { length: 0 }
    var undefinedProperties = { length: 0 }
    for (var i = 0; i < object.length; i++) {
        var property = object[i]
        //split properties into undefined properties
        if (property === undefined) {
            undefinedProperties[undefinedProperties.length] = property
            undefinedProperties.length++
            continue
        }
        //split properties into blank properties
        var isBlank = true
        for (var j = 0; j < property.length; j++) {
            if (property[j] !== ' ')
                isBlank = false
        }
        if (isBlank) {
            blankProperties[blankProperties.length] = property
            blankProperties.length++

        } else {
            //split properties into defined properties
            definedProperties[definedProperties.length] = property
            definedProperties.length++
        }

    }
    //Turn defined properties into UTF-16 values and store the strings in an object->definedPropertyConverted
    //ex definedPropertyConverted[0] = {0:102,1:111,2:114,3:107,4:115,5:'forks',length:6}
    var definedPropertiesConverted = { length: 0 }
    for (var i = 0; i < definedProperties.length; i++) {
        var newString = { length: 0 }
        // save each string as a new object as //ex definedPropertyConverted[0] = {0:102,1:111,2:114,3:107,4:115,5:'forks',length:6}
        for (var j = 0; j <= definedProperties[i].length; j++) {//f,o,r,k,s, forks
            if (j === definedProperties[i].length) {
                newString[j] = definedProperties[i]
                newString.length++

            } else {
                var utfCode = definedProperties[i].codePointAt(j)
                newString[newString.length] = utfCode
                newString.length++

            }
        }
        //we have the strings converted into UTF-16 ready to compare them and sorting them
        //the last property of each object is the "string" meaning of the converted UTF-16 code units 
        definedPropertiesConverted[i] = newString
        definedPropertiesConverted.length++
        //TODO sort ->compare the first code unit (X) of a string (STRING A) with the first code unit (Y) off the next string (STRING B)
        // if X > Y then STRING A comes before STRING B
        // if X === Y we compare the second code unit (X) of a string (STRING A) with the first code unit (Y) off the next string (STRING B)
        // if if X > Y then STRING A comes before STRING B
    }
    //then sort in ascending order
    return
}



var items = {
    0: 'forks',
    1: undefined,
    2: 'spoons',
    3: ' ',
    4: undefined,
    5: 'knife',
    6: ' ',
    length: 7

}
var arrayItems = ['forks', undefined, 'spoons', ' ', undefined, 'knife', ' ']
var itemsSorted = sortElements2(items)
console.log('CASE 1 : sort items by utf-16 unicode comparison')
console.log('expected result')
console.log(arrayItems.sort())