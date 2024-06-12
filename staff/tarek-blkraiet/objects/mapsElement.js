//  el motodo map da un array con cambio de valores o las operaciones que queria hacer nuevo iniciando desde un array hay existe y mantiene el antigo array. y la misma length



var mixcWords={
    0:'papers',
    1:'film',
    2:'keyboard',
    3:'phone',
    4:'table',
    5:'bed',

    length:6
}
//ejemplo que he hecho con manuel
/*maps each elemrent from interable object to another iterable object.
*
*@param(*) iterable
*@param(*) callback
*/
function map(iterable, callback){
    var mapped ={length:0}

    for( var i=0; i<iterable.length;i++){
        var element = iterable[i]

        var mappedElement = callback(element)

        mapped[mapped.length]= mappedElement
        mapped.length++

    }
    return mapped
}

console.log('TEST map')

console.log('case multiply numbers by 2')

var nums ={
    0:1,
    1:4,
    2:9,
    3:16,

    length:4
}

var numsX2 = map(nums, function(n){ return n*2})

console.log(numsX2);
/*
0:2,
1:8,
2:18,
3:32

length :4
*/
console.log('CASE map lower case to upper case')

var names = {
    0:'Mary',
    1:'Stella',
    2:'Amanda',

    length:3
}

var namesInUpperCase = map (names, function(name) {
    return name.toUpperCase()
})

console.log(namesInUpperCase)
/*
{
    0:'MARY',
    1:'STELLA',
    2:'AMANDA',

    length:3

 IMPORTANTE HE LLEGADO LINA 71 maps de Manu
}
*/