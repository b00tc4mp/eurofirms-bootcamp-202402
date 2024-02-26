
var planetas = {
    0: "Tierra",
    1: "Urano",
    2: "Jupiter",
    3: "Neptuno",
    4: "Venus",
    5: "Marte",
    length: 6
}

function removeFirstPlaneta(pa){
    
    var planetaEliminado = pa[0];

    for(var i=0;i < pa.length;i++){

           pa[i] = pa[i + 1];

       }

    return planeteEliminado;
}

removeFirstPlaneta(planetas);

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