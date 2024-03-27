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

var adrian = new Person('Adrian', 34, 'Galicia')

console.log(adrian)

// VM492:15 Person {name: 'Adrian', age: 34, country: 'Galicia'}