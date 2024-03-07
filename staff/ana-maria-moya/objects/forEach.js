var callback = function (element) {
    console.log(element)
}

    function forEach (object, callback) {
        for (var i = 0; i< object.length; i++) {
            callback(object[i])
        }

    }


var colors = {
    0: 'red',
    1: 'yellow',
    2: 'orange',
    3: 'blue',
    4: 'green',
    5: 'pink',
    length: 6
}

forEach(colors, callback)

