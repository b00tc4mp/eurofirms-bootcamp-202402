var sports = {
    0: 'boxing',
    1: 'tennis',
    2: 'soccer',
    3: 'football',
    4: 'basketball',
    5: 'judo',
    6: 'volleyball',
    7: 'baseball',
    length: 8
}

function callback(element,) {
    return element.length > 6
}

function every(object, callback) {
    for(var i=0 ; i< object.length;i++) {
        if(!callback(object[i])) {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}
every(sports,callback)