var people = {
   0: 'Salva',
   1: 'Maite',
   2: 'Majose',
   3: 'Javi',
   4: 'Alba',
   5: 'Laia',
   length: 6
}

//A callback function is a function passed into another function as an argument
//mi funcion callback intervendrá en otra funcion de este objeto¿?cómo

//la primera funcion sera para recorrer los objetos y llamar a la funcion callback como un argumento
//la funcion callBack debe ser una funcion que altere el objeto

function forEachPerson(object, callback) {
   //recorro las propiedades del objeto
   for (var i = 0; i < object.length; i++) {
      //Si el valor no es undefined se podrá llamr a callback
      if (object[i] !== undefined)
         //llamar a callback para pasarle el valor de la propiedad y el indice
         callback(object[i], i)


   }
}
//definir que va a hacer callback teniendo en cuenta que va a mostrar el valor de cada propiedad y su indice

function callBack(name, index) {
   //Imprimir en consola el nombre y el indice
   console.log('Person', index, ':', name)
}
console.log('LIST OF PEOPLE')
//Llamo a la funcion forEchPerson con el objeto y el callback
forEachPerson(people, callBack)
