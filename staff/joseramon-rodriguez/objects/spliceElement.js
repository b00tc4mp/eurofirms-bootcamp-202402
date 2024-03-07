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
    if (-object.length <= start < 0)
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
        deleteCount = object.length - 1
    //its deleteCount is greater than or equal to the number of elements after the position specified by start
    var elementsFromStart = 0
    for (i = startIndex; i < object.length; i++) {
        elementsFromStart++
    }







    return result
}