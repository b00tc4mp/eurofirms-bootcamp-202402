function map ( object, callback){
// recorrer el objecto
// llamo a mi callback con cada uno de los elementos del array
// arma un nuevo array (objeto) con el valor que se retorne mi callback
// modificar la longitud
// retornar el nuevo array
var callback = function(element){
     console.log(element)}
var result = {}

for ( var i = 0 ; i < object.length; i++ ) {
    callback[i] = callback(object[i])



}

result.length = object.length

return result

}
var users = {

    '0': { 
        name: 'Javier',
        surname: 'Pulido',
        password: '123123123',
        
    },

    '1': { 
        name: 'Pepito',
        surname: 'Pepito12',
        password: '123123123',
        
    },
    
    '2': { 
        name: 'Grillo',
        surname: 'Grillo12',
        password: '123123123',
       
    },
        length: 3
}

var userNames = map(users, function (element) {

    return element
})

console.log (userNames)
