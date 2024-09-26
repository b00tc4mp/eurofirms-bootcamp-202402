var people = {
    0: { name: 'Salva', lastname: 'Tortajada', city: 'Manises' },
    1:  { name: 'Maite', lastname: 'Albenca', city: 'Manises' },
    2: { name: 'Javi', lastname: 'Pulido', city: 'Granada'}, 
    3: { name: 'Pepito', lastname: 'Grillo', city: 'Pinocholandia'},
    length:4
}

//Una función a ejecutar para cada elemento de la matriz. Debería devolver un valor verdadero para indicar que se ha encontrado un elemento coincidente y un valor falso en caso contrario.


function findIndex (object, callback){

    for (var i = 0; i < object.length; i++) {

    if(callback(object[i])) {
       return i
    }       
}
       return false
}

var callback = function(element){
    return element.name === 'Javi'
}

console.log ( 'CASE 1: buscar el indice del nombre Javi')

console.log(findIndex(people, callback))