
//el slice del profe
//slice (superheroes, -3 , -3)
var superHeroes = {
    // -9: 'undefined'
    // -8:'undefined'
    // -7:'undefined'
    //- 6: 'undefined'
    // ...
    0: 'Batman',
    1: 'Superman',
    2: 'Flash',
    3: 'Spiderman',
    4: 'Hulk',
    5: 'The Thing',
    6: 'Wonder woman',
    7: 'Iron man',
    8: 'Arrow',

    length: 9
}
function slice(object,indexStart,indexEnd){
    var result = {lenght:0}

    //si no tenemos ningun parametro retornamos el clon
    if(indexEnd === undefined && indexStart === undefined){
        var objectClone = {...object}
        return objectClone
    }
    //si nos nos envian un indexEnd o es mayor al objeto de referencia, le asignamos indexend = final del objeto
    if(indexEnd === undefined || indexEnd > object.length)
        indexEnd= object.lenght
}