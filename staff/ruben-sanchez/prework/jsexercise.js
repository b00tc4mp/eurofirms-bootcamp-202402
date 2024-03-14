numbers = {
    '0': 20,
    '1': 30,
    '2': 40,
    '3': 50,
    length: 4
}



function shift( object ) { 
    let value0 = object[0];
    delete object[0];
    object.length--
    return value0


}


function pop(object) {
    let value0 = object[object.length-1]
    delete object[object.length-1]
    object.length--
    return value0
}