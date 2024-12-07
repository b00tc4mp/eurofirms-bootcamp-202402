function spliceElement(object, start = 'noExiste', deleteCount = 'noExiste', ...elements) {
    //start por defecto = "no exsite"
    //-> luego comprobar que start != "noexiste"
    //-> si start === 'noExiste' no se borra nada->start = object.length
    if (start === 'noExiste')
        start = object.length
    if (start === undefined)
        start = 0

    var result = { length: 0 }
    var startIndex = parseInt(start)

    if (start === undefined)
        startIndex = 0
    if (-object.length <= start && start < 0)
        startIndex = start + object.length
    if (start < -object.length)
        startIndex = 0
    if (start >= object.length) {
        startIndex = object.length
    }
    //deleteCount por defecto = "noExsite"
    //-> luego comprobar que deleteCount != "noExiste"
    //-> si deleteCount === 'noExiste' se borra todo->deleteCount->object.length-1
    if (deleteCount === 'noExiste')
        deleteCount = object.length
    //its deleteCount is greater than or equal to the number of elements after the position specified by start
    var elementsFromStart = 0
    for (i = startIndex; i < object.length; i++) {
        elementsFromStart++
    }
    if (deleteCount >= elementsFromStart)
        deleteCount = object.length - deleteCount
    if (deleteCount <= 0) {
        deleteCount = 0
    }
    //if deleteCount > 0 then we need to delete elements before inserting elements if any
    if (deleteCount > 0) {
        var escapeStart = startIndex
        for (var i = 0; i < deleteCount; i++) {
            result[result.length] = object[escapeStart + i]
            result.length++
            delete object[escapeStart + i]
            //escapeStart++
            object.length--
        }
        for (var i = startIndex; i < object.length; i++) {
            object[i] = object[i + deleteCount]
        }
        //borrar lo que sobra->siempre sobran la cantidad de elementos borrados -> deleteCount
        delete object[object.length + 1]


        return result
    }
    //if deleteCount = 0 then there is no deletion of elements, so we insert elements
    //check if there is elements to insert
    //move elements from the starting point to make room for insertions
    //adjust length
    //insert the elements into the room previusly created








}

var nums = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}

console.log('CASE 1 : remove 1 from nums and dont add anything')
var case1 = spliceElement(nums, 0, 1)
console.log(case1)
console.log(nums)

var nums = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}

console.log('CASE 2 : remove 2 elements from index 1 from nums and dont add anything')
var case2 = spliceElement(nums, 1, 2)
console.log(case2)
console.log(nums)

var nums = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}

console.log('CASE 3 : remove 2 elements from index -1 from nums and dont add anything')
var case3 = spliceElement(nums, -2, 2)
console.log(case3)
console.log(nums)
