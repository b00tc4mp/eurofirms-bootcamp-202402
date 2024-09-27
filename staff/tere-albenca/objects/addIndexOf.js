console.log('FUNCTION INDEX OF')
var cities ={
    0:'Madrid',
    1:'Barcelona',
    3:'Tokyo',
    4:'Lima',
    5:'Santiago',
    6:'New York',
    7:'Paris',
    length: 8
}

console.log('CASE 1 : FUNCTION INDEX OF')
//var cities ={0:'Madrid',1:'Barcelona',3:'Tokyo',4:'Lima',5:'Santiago',6:'New York',7:'Paris',length: 8}
function indexOf(object, value, fromIndex){
    //si el valor de fromIndex es undefined se pondrá a 0
    if(fromIndex === undefined){ 
        fromIndex =0}
    //si fromIndex es mayor que object.length
    if(fromIndex >= object.length){
        console.log('this value doesnt exist')
    }
    //si fromIndex es menor que 0 , lo pondremos al inicio
    if(fromIndex < 0){
        fromIndex = 0
    }
    for (var i= fromIndex; i < object.length; i++){
        if(object[i] === value){
            console.log('index of this value is')
            return i
        }
    }
    console.log('this value doesnt exist')
}
console.log(indexOf(cities, 'Paris')); // Debería imprimir 7