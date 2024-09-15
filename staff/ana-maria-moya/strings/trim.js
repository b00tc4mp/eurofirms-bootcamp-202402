function trim(string) {
var result = ''
for(var i=0; i< string.length; i++){
    if(string[i] !== ' ' || result ) 
    result += string[i]
}
return result
}
var finishResult = '' 
for(var i= result.length -1; i >= 0; i--){
    if(result[i] !== ' ' || finishResult ) {
    finishResult += result[i]
    }
    return finishResult
}





var string = '   Hellow world  '
console.log('Case1: eliminar  espacios vacios al principio y al final y empezar el resultado desde el primer caracter')
console.log({result: trim(string)})