//Removes elements specified by index and count from iterable object and returns them.

function removeElements(object, index, count) {

//var ages = { 0: 'baby',1: 'child',2: 'teenager',3: 'young',4: 'adult',5:'old',6:'centenarian',length: 7}
//var ages = { 0: 'baby',1: 'child',2: 'teenager',5:'old',6:'centenarian',length: 7}
//var ages = { 0: 'baby',1: 'child',2: 'teenager',3:'old',6:'centenarian',length: 7}
//var ages = { 0: 'baby',1: 'child',2: 'teenager',3:'old',4:'centenarian',length: 7}
//var ages = { 0: 'baby',1: 'child',2: 'teenager',3:'old',4:'centenarian',length: 4}

    //verifico el index y si hay elements para eliminar
    //si index es menor que cero, mayor o igual que el length o la cantidad a eliminar es menor o igual a cero

    if( index < 0|| index >=object.length ||count <= 0){
        return;

    }
    //calculo el nuevo valor de length restando la longitud total con el numero a eliminar
    var newLength = object.length -count;
    //evito que el objeto tenga propiedades en negativo
    if(newLength < 0){newLength = 0;}
     // Elimino los elementos del objeto machacando las propiedades que le siguen a las que eliminar
    for (var i = index; i < newLength; i++) {
        object[i] = object[i + count];
    }
     // Elimino las propiedades sobrantes despues de machacar las otras
     for (var i = newLength; i < object.length; i++) {
        delete object[i];
    }
    //cambio la cantidad del length
    object.length = newLength;
}

console.log('CASE 1: remove at index 3, 2 elements from ages')

var ages = {
    0: 'baby',
    1: 'child',
    2: 'teenager',
    3: 'young',
    4: 'adult',
    5:'old',
    6:'centenarian',

    length: 7
}
console.log(ages)

var removedProperties = removeElements(ages, 3, 2)
console.log(ages)

console.log('CASE 2: remove at index 2, 2 elements from money')

var money = {
   0: '1$',
   1: '2$',
   2: '5$',
   3: '10$',
   4: '20$',
   5: '50$',
   6: '100$',
   7: '200$',
   8: '500$',
   9: '1000$',
   length: 10
}

console.log(money)

var removedProperties = removeElements(money, 2, 2)
console.log(money)