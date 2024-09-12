function Carray() {
  var elements = arguments;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    this[i] = element;
  }

  this.length = elements.length;
}

Carray.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];

    callback(element);
  }
};

Carray.prototype.find = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];

    var matches = callback(element);

    if (matches) return element;
  }
};

Carray.prototype.map = function (callback) {
  var results = new Carray();

  for (var i = 0; i < this.length; i++) {
    var element = this[i];

    var mappedElement = callback(element);

    results[results.length] = mappedElement;
    results.length++;
  }

  return results;
};

Carray.prototype.filter = function (callback) {
  var results = new Carray();

  for (var i = 0; i < this.length; i++) {
    var element = this[i];

    if (callback(element)) {
      results[results.length] = element;
      results.length++;
    }
  }

  return results;
};

Carray.prototype.reverse = function () {
  for (var i = 0; i < Math.floor(this.length / 2); i++) {
    var valueStart = this[i];
    var valueEnd = this[this.length - i - 1];

    this[i] = valueEnd;
    this[this.length - i - 1] = valueStart;
  }

  return this;
};

Carray.prototype.slice = function (indexStart, indexEnd) {
  var result = new Carray();

  // si no tenemos ni indexStart ni indexStart, retornamos un clon del object
  if (indexEnd === undefined && indexStart === undefined) {
    var objectClone = { ...this };

    return objectClone;
  }
  // si no nos envian indexEnd, le asignamos el object.length que seria el final
  if (indexEnd === undefined || indexEnd > this.length) {
    indexEnd = this.length;
  }

  if (-indexEnd > this.length || indexStart > this.length) {
    return result;
  }

  if (indexEnd < 0) {
    indexEnd = this.length + indexEnd;
  }

  // si no nos envian indexStart, le asignamos el 0 que seria el comienzo
  if (indexStart === undefined || -indexStart > this.length) {
    indexStart = 0;
  }

  if (indexStart < 0) {
    indexStart = this.length + indexStart;
  }

  for (var i = indexStart; i < indexEnd; i++) {
    var resultIndex = i - indexStart;

    result[resultIndex] = this[i];
  }

  result.length = indexEnd - indexStart;

  return result;
};

Carray.prototype.push = function (...elements) {
  for (var i = 0; i < elements.length; i++) {
    this[this.length] = elements[i];
    this.length++;
  }
  return this.length;
};

Carray.prototype.every = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

module.exports = Carray;
