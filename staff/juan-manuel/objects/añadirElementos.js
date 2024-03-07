function añadirElementos(objeto) {
    for (var helado = 1; helado < arguments.length; helado++){
        objeto[objeto.length] = arguments[helado]
        objeto.length++
    }
}

var heladitos = {
    0: "limonsito",
    1: "fresita",
    2: "naranjita",

    length: 3
}

añadirElementos(heladitos, "melonsito", "manzanita", "bananita")