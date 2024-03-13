var people = {
    0: { name: 'Salva', lastname: 'Tortajada', city: 'Manises' },
    1: { name: 'Javi', lastname: 'Pulido', city: 'Granada'},
    2: { name: 'Maite', lastname: 'Albenca', city: 'Manises' },
    3: { name: 'Pepito', lastname: 'Grillo', city: 'Pinocholandia'},
    length:4
}

//Esta function recorre el objeto y aplica el callback
function find(object, callback) {
    //devolver un objeto como resultado
    var result = {}
    //recorrer el length del objeto para evaluar todos los elementos
    for (var i = 0; i < object.length; i++) {
    //declaro la variable element que es igual a un valor del objeto
    var element = object[i]
    //callback(object[i])
    if(callback(object[i]))
        result = element
}
    return result

}

//esta funcion es el callback
// find(people, function(element){
    var found = find(people, function(element) {
        // devuelve el elemento salva
        //elemennt.name === 'Maite'

        return element.name === 'Maite'
    
})

console.log(found)