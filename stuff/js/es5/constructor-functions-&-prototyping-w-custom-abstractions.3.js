function Person(name, age, country) {
    /*
    this['name'] = name
    this['age'] = age
    this['country'] = country
    */

    this.name = name
    this.age = age
    this.country = country
}

Person.prototype.fart = function () {
    return this.name + ': 💨'
}

Person.prototype.pee = function () {
    return this.name + ': 💦'
}

Person.prototype.poo = function () {
    return this.name + ': 💩'
}

var david = new Person('David', 28, 'Valencia')

console.log(david)

console.log(david.fart())
console.log(david.pee())
console.log(david.poo())

// VM602: 27 Person { name: 'David', age: 28, country: 'Valencia' }
// VM602: 29 David: 💨
// VM602: 30 David: 💦
// VM602: 31 David: 💩