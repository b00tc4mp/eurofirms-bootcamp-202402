/** 
 * removes first element from iterable object and returs it.
*/

function removeFirstElement(object){
    TODO
}
console.log('case1:remove peugeot from cars')

var cars ={
    0:'peugeot',
    1:'ford',
    2:'renault',
    3:'audi',
    4:'bmw',
    5:'mercedez',
    6:'bentley',
    7:'ferrari',

    length:8
}
 var firstCar = removeFirstElement(cars)

 console.log(firstCar)
 //'peugeot'

 console.log(cars)
 /*
 {
    
    0:'ford',
    1:'renault',
    2:'audi',
    3:'bmw',
    4:'mercedez',
    5:'bentley',
    6:'ferrari',
    length:7,
 }
 */


 console.log('case2: remove 100 from nums')
  var nums={
    0:100,
    1:200,
    2:300,
    3:400,
    4:500,
    5:600,
    6:700,

    length:5

  }

  var firstNum= removeFirstElmnt(nums)

  console.log(firstNum)

  //100
  console.log(nums)
  /*
  {
    
    0:200,
    1:300,
    2:400,
    3:500,
    

    length:4
  }
  */