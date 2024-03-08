
//segunda posibilida de hacer la function

function reverse(object){
 var interations = Math.floor(object.length/2) // math saca el numero que sobra despues de dividir en 2
 for (var i=0; i< interations; i++) {
    var element =object[i]  // para guardar el primer element

    object[i]= object[object.length -1-i] // para cambiar el primer elment por el ultimo

    object[object.length-1-i] = element // subir el ultimo element al primero
 }
 return object
}

console.log('FUNCTION REVERSE')

console.log('case1:reverse fruits')


var fruits = {
     1:'watermelon',
     2:'peach',
     3:'cocout',
     4:'tangerine',
     5:'apple',
     6:'banana',
     
     length :7
 
}

var result = reverse(fruits)

console.log(result)
console.log(fruits)
console.log({sameObjects: result === fruits})




