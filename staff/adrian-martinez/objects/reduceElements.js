
//Función reduce con números
var numbers = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    length: 4
}

//Tenemos que definir la función reduce() si queremos utilizar la nuestra propia y no la nativa de JavaScript
 function reduce(object, callback, initialValue){

    var result = initialValue;
    var index = 0;

    if(initialValue === undefined){

        result = object[0];
        index = 1;
    }
    for(var i=index; i < object.length;i++){

        result = callback(result, object[i], i, object);
    }

    return result;
}
var totalSum = reduce(numbers, function(acumulator, number){
    return acumulator + number;
},0)

console.log(numbers);
console.log(totalSum);

//Función reduce con cadenas
var nombres = {
    0: "Pepito Grillo",
    1: "Peter Pan",
    2: "Wendy Pan",
    3: "Capitán Garfio",
    length: 4
}

var namesToArray = reduce(nombres, function(acumulator, name){

    acumulator[acumulator.length] = { name };
    acumulator.length++;

    return acumulator;
},{ length:0 })

console.log(namesToArray);

