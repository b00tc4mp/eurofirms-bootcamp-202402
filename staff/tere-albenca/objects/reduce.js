var numbers = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
};

var names = {
    0: 'Javieres',
    1: 'Ignacio',
    2: 'Cris',
    3: 'JoseRa',
    4: 'Adrian',
    5: 'Maite',
    6: 'JuanMa',
    7: 'Ruben',
    8: 'Sara',
    9:'Lorena',
    10: 'Manu',
    11: 'AnaM',
    12: 'Josep',
    13:'bernat',
    14: 'David',
    15: 'sergio',
    16:'tarek',
    length: 17
}

function reduce(object, callback, initialValue) {
    //esto es como un if. declaro result y le digo que si initial value no es undefined sea el primer valor del object
    var result = initialValue !== undefined ? initialValue : object[0]; 
    //recorro el array 
    for (var i = 0; i < object.length; i++) {

            //result será igual a la callback = result mas object
            result = callback(result, object[i]);
        
    }
    //devuelvo el resultado
    return result;
}

var sumTotal = reduce(numbers, function (accumulator, number) {
    return accumulator + number;
}, 0);

console.log(sumTotal); // daría 10

function reducetwo(object, callback, initialValue) {
    //esto es como un if. declaro result y le digo que si initial value no es undefined sea el primer valor del object
    var result = initialValue !== undefined ? initialValue : object[0]; 
    index = 1
    //recorro el array 
    for (var i = index; i < object.length; i++) {

            //result será igual a la callback = result mas object
            result = callback(result, object[i]);
        
    }
    //devuelvo el resultado
    return result;
}

var sumTotalTwo = reducetwo(numbers, function (accumulator, number) {
    return accumulator + number;
});

console.log(sumTotalTwo); // daría 10
// sumar nombres en

var concatenatedNames = reduce(names, function(accumulator, name) {
    return accumulator + ' ' + name;
    //return name + ' '+ accumulator
}, '');

console.log(concatenatedNames);