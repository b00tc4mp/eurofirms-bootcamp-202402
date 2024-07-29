// es un methodo qu excuta una de cada element de array o function

function forEachElement(object, callback) {
    for (var i = 0; i < object.length; i++) {
        callback(object[i])
    }

}

// function that prints somthing
function print(something) {
    console.log(something)
}

var worlds = {
    0: 'Palastine',
    1: 'tunez',
    2: 'peña',
    3: 'Maroco',
    4: 'naranja',
    5: 'España',
    6: 'Baja',
    length: 7
}
console.log('case 1 : show all the worlds with callback')
forEachElement(worlds, print)