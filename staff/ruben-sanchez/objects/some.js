var colors = {
    0: 'blue',
    1: 'red',
    2: 'green',
    3: 'black',
    4: 'white',
    5: 'grey',
    6: 'violet',
    7: 'pink',
    8: 'orange',
    length: 9


}
 function trueOrFalse ( element) {
    return element == 'pink'
 }

 function some(object,callback) {
    for (var i=0 ; i < object.length;i++) {
        var aux = object[i]
        if (callback(aux)) {
            console.log(true)
            return true
        }
    }    
    console.log(false)
    return false
 }
 some(colors, trueOrFalse)