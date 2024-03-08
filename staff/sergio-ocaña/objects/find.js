find(object, search, callback, value){

    for (var i = 0; i < object.length; i++) {
        result = callback(object[i], search, value)
    }
}

var callback = function (element, search, value) {
    if (typeof search === "number") {
        if (search === element)
            return true
    }

}
// TODO  WIP EXAMPLES