





var cars = {

    0: 'peugeot',
    1: 'ford',
    2: 'renautl',
    3: 'audi',
    4: 'bmw',
    5: 'mercedes',
    6: 'bentley',
    7: 'ferrari',

    length: 8

}
 function  removeCars (object, index) {
        var removedElement = object[index]

        for (var i = index; i < object.length; i++) { 

            object[index] = object[index +1]



        }
        
        delete object[object.length-1]
        object.length--
        return removedElement
 }

 console.log(cars)

 removeCars(cars, 3)
  
 console.log(cars)