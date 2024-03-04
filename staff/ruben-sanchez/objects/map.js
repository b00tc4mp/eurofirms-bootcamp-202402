var languages = {
    0: 'Spanish',
    1: 'Catalan',
    2: 'English',
    3: 'Xinese',
    4: 'German',
    5: 'Japanese',
    6: 'French',
    7: 'Japanese',
    length: 8
}

var callback = function (element) {
    console.log(element)
}

function map ( object, callback) {
    var newObject = {length:0}
    for ( var i=0; i < object.length; i++) {
        newObject[i] = object[i]
        newObject.length++
        callback(object[i])


    }
    return newObject

}
map(languages, callback)