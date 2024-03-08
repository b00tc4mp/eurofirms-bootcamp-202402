function join(object, separator =','){
    //creamos un acumulador que iniciamos como un string vacio de los valores
    var result =''
    // recorrer object completo con bucle for
    for (var i=0;i< object.length; i++){
        var element = object[i]

        // condition para no agregar la coma al principio
        if(i !==0){
            //acumular los elementos
            result = result + separator + element
        }
        else{
            // si i es 0, insertamos el primero element (almendro en result)
            result = element
        }

        //condicion para no agregar la coma al final 
        //if (i !== object.length -1){
        //   result = result +element +separator
        //}
        //else {
        //   result = result + element
        //}

    }
    return result
    //tomar cada uno de los valores y los vamops acumulando en un resutado
    // i=0 almendro (acumulador ='' object[i] = almentro) (condition para no poner la cama)
    //i=1  almendro,olivo (acumulador ='almendro' separator =',' object[i] =olivo)
    //i= 2 almendro, olivo, roble(acumulador='almendro,olivo' separator=',' object[i]= roble)
    //i= 2 almendro, olivo, roble, pino,(acumulador='almendro,olivo,roble' separator=',' object[i]= roble)
}
console.log('FUNCTION JOIN')

console.log('case1:join elements from object into an string with default separator ","')

var trees = {
    0:'Almentro',
    1:'Olivo',
    2:'Roble',
    3:'Pino',
    4:'Abeto',
    5:'Palmera',
    6:'Manzano',
    7:'Araucaria',
    8:'Limonero',
    
    
    length:9

}
var result = join(trees)

console.log(result)


console.log('case2:join elements from object into an string with default separator "-"')

var result2= join(trees,'-')

console.log(trees)
console.log(result2)