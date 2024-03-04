var languages = {
    0: 'xinese',
    1: 'english',
    2: 'spanish',
    3: 'catalan',
    4: 'german',
    5: 'french',
    6: 'ducth',
    7: 'japanese',
    length: 8
}
function callback() {
    var newObject = {length:0}
    var counter = 0
    if (object[i].length > 6) {  
        newObject[counter] = object[i]
        counter++
        newObject.length++
}

function filter ( object ,callback) {
    
    for (var i=0; i < object.length; i++) {
         
        callback(object)



            
        }

    }
    return console.log(newObject)
}

 filter(languages , callback)