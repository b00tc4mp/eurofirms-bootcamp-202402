var cities = {
    0: 'Barcelona',
    1: 'Madrid',
    2: 'Valencia',
    3: 'Tokyo',
    4: 'Oslo',
    5: 'Paris',
    6: 'Santiago',
    7: 'Londres',

    length: 8
}


function indexOf(object, element, beginFrom = 0) {
    if   ( 0 > beginFrom || beginFrom == object.length)  {

        return -1
    }
    
    var indexI = -1;
        for (var i = beginFrom; i < object.length; i++) { 
            if (object[i] === element) {

                indexI = i

            }




        }

        return console.log(indexI)

}

console.log("CASE 1:   We write (cities, 'Tokyo') and returns 3")

indexOf(cities, 'Tokyo')

console.log("CASE 2:   We write (cities, 'Austin') and returns -1")

indexOf(cities, 'Austin')

console.log('CASE 3: We write (cities, Madrid,3) and returns -1')

indexOf(cities, 'Madrid', 3)