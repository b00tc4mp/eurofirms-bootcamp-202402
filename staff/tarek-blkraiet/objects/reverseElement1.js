
//other ocaction to do the reverse function

function reverse(object){
   var objectCopy = { ...object}

   for(var i=0; i<object.length;i++){
      object[i]=objectCopy[object.length -1 -i]
   }

   return object
}

console.log('function reverse')
console.log('Case 1 reverse the fruits list')

var fruits ={
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
console.log({sameOjbect : result === fruits}) // to check the result is egal a fruits 