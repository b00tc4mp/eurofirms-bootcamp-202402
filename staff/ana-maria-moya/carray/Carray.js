function Carray() {
    var elements = arguments
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        this[i] = element
    }
    this.length = elements.length
}

Carray.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        callback(element)
    }


}
Carray.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var matches = callback(element)

        if (matches)
            return element
    }
}

Carray.prototype.map = function (callback) {
    var results = new Carray

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var mappedElement = callback(element)

        results[results.length] = mappedElement
        results.length++

    }
    return results
}

Carray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}

Carray.prototype.every = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element= this[i]
        if (!callback(element)) return false
    }
    return true
   
}

Carray.prototype.shift = function() {
    var result = this[0]
    for (var i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1]
    }
    this.length--


    delete this[this.length]
    return result
}

Carray.prototype.filter = function (callback){
    var result = new Carray()

    for (var i= 0; i < this.length; i++) {
        var element = this[i]
        if(callback(element)) {
            result[result.length] = element
            result.length++
        }
    }
    return result

Carray.prototype.bubbleSort = function(){
    var bubble = true
  
    for (var i = 0; i < this.length && bubble; i++){
      bubble = false
  
      for (var j = 0; j < this.length-1-i; j++){
        var element = this[j]
        var nextElement = this[j + 1]
  
        if(element > nextElement){
          this[j] = nextElement
          this[j + 1] = element
  
          bubble = true
        }
      }
    }
  
    return this
  }
  

module.exports = Carray