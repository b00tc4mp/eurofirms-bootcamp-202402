
console.log('FUNCTION INCLUDES');
var cities ={
    0:'Madrid',
    1:'Barcelona',
    2:'Valencia',
    3:'Tokyo',
    4:'Lima',
    5:'Santiago',
    6:'New York',
    7:'Paris',
    8:'London',
    length: 8
};
console.log('CASE 1: JOIN ELEMENT');

function joinElement(object){
    var stringObject=''
    var space = ', '
    for (var i = 0; i < object.length; i++){
        if(i === object.length - 1){
            stringObject = stringObject + object[i] + '.'
        } else {
            stringObject = stringObject + object[i] + space;
        }
    }
    return stringObject
}

var result = joinElement(cities);
console.log(result);

