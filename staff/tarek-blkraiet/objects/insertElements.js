// inserts element in interable object at specified index

function insertElement(object, index){
    
  var valueToInsertLength = arguments.length-2
      
  for( var i= object.length - 1; i>=index; i--) {
      
      object[i + valueToInsertLength] = object[i]
      
  }
  for (var i =2; i < arguments.length; i++){
      object[index + (i - 2)]= arguments[i]

      object.length++
  }
  //object.length+= valueToInsertLength
}
console.log('case1: inserts citroen,volkswagen andd seat in cars  at index 4')

var cars = {
  0:'peugeot',   //0:'peugeot'
  1:'ford',      //1:'ford
  2:'renault',   //2:'renault'
  3:'audi',      //3:'audi'         
  4:'bmw',       //4:'bmw'          4:'citrioen,
  5:'mercedez',  //5:'mercedez'     5:'volkswangen
  6:'bentley',   //6:'bentley'      6:'seat'
  7:'ferrari',   //7:'bmw'
  //:8           //8:'mercedez'
  //:9           //9:'bentley'
  //:10          //:10:ferrari

  length:8 
}
insertElement(cars, 4,'citroen','volkswagen', 'seat')
console.log(cars)

/*
{
  0:'peugeot',
  1:'ford',
  2:'renault',
  3:'audi',
  4:'citroen',
  5:'volkswagen',
  6:'seat',
  7:'bmw',
  8:'mercedez',
  9:'bentley',
  10:'ferrari',

  length:11
}
*/
console.log('case2: add 250, 260,270,280,290 in nums at index 2')
var nums ={
  0:100,
  1:200,
  2:300,
  3:400,
  4:500,

  length:5
}
insertElement(nums, 2, 250,260,270,280,290)

console.log(nums)
/*

  0:100,
  1:200,
  2:250
  3:260,
  4:270,
  5:280,
  6:290,
  7:300,
  8:400,
  9:500,

  length:10
*/