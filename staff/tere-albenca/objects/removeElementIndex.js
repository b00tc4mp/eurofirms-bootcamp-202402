
// { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', 8: 'ferrari', length: 8 }

var cars = {
    0: 'peugeot', 
    1: 'ford', 
    2: 'renault', 
    3: 'audi', 
    4: 'bmw', 
    5: 'mercedez', 
    6: 'bentley', 
    7: 'ferrari', 
    length: 8
}

function removeCars(object,index){
    //este elemento será el que se elimine
    var removeElement = object[index]
    //recorro las propiedades desde index
    for (var i = index; i < object.length -1; i++){
        //asigna el nuevo valor
        object[i] = object[i + 1]
    }
    //Elimina la última propiedad del objeto que queda repetida
    delete object[object.length -1];
    //cambiar propiedad length
    object.length--;
    return removeElement;
}
removeCars(cars,4)
console.log(cars)