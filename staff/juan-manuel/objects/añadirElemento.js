function añadirElemento(objeto, elemento) {
    objeto[objeto.length] = elemento
    objeto.length++
}

var helados = {
    0: "naranja",
    1: "limón",
    2: "sandía",
    3: "fresa",

    length: 4
}

añadirElemento(helados, "Kiwi")