function trim(string) {
var result = ''
for(var i=0; i< string.length; i++){
    if(string[i] !== ' ' || result ) 
    result += string[i]
}
return result
}
var finishResult = '' 
for(var i= string.length; i<0; i--){
    if(string[i] !== ' ' || finishResult ) 
    finishResult -= string[i]

}



var string = '   Hellow world  '
console.log('Case1: eliminar  espacios vacios al principio y al final y empezar el resultado desde el primer caracter')
console.log({result: trim(string)})