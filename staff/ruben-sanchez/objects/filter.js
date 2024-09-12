var languages = {
    0: 'xinese',
    1: 'english',
    2: 'spanish',
    3: 'catalan',
    4: 'german',
    5: 'french',
    6: 'ducth',
    7: 'japanese',
    length: 8
}
var callback = function (element) { 
   return element.length > 6
   }


function filter  ( object ,callback) {
    var newObject = {length:0}
   
    
    for (var i=0; i < object.length; i++) {
         
       if (callback(object[i])){
        newObject[newObject.length] = object[i]
       
       newObject.length++ 
       }


            
        }
        return newObject

    }
    
    

 var newLanguages =filter(languages , callback)

 console.log(newLanguages)