var colors = {

    0: 'black',
    1: 'white',
    2: 'red',
    3: 'blue',
    4: 'brown',
    5: 'orange',
    6: 'yellow',
    7: 'pink',

    length: 8

}

function forEach ( object, callback){

    for ( var i = 0 ; i < object.length; i++ ) {
        callback(object[i])
}
    
}

var printColors = function (element) {
    console.log(element)
}

