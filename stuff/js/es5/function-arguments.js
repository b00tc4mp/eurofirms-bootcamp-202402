function salute() {
    for (var i = 0; i < arguments.length; i++) {
        var person = arguments[i]

        console.log('hola', person)
    }
}

salute('maite', 'peter')
// hola maite
// hola peter

salute('anna', 'cris', 'adrian', 'jose')
// hola anna
// hola cris
// hola adrian
// hola jose