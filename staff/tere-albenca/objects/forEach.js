var people = {
    0: { name: 'Salva', lastname: 'Tortajada', city: 'Manises' },
    1: { name: 'Javi', lastname: 'Gallego', city: 'Manises' },
    2: { name: 'Maite', lastname: 'Albenca', city: 'Manises' },
    3: { name: 'Majose', lastname: 'Albenca', city: 'Manises' },
    length: 4
}
function forEach(object, callback) {
    //recorro las propiedades del objeto
    for (var i = 0; i < object.length; i++) {
        //Si el valor no es undefined se podrá llamr a callback
        if (object[i] !== undefined)
            //llamar a callback para pasarle el valor de la propiedad y el indice
            callback(object[i], i)
    }
}

forEach(people, function (element) {
    console.log(element.name)
})