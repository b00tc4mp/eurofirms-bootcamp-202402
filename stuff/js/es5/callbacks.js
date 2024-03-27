var peter = { name: 'Peter', birthdate: '2000-01-01', country: 'England', career: 'coder', family: [] }
var wendy = { name: 'Wendy', birthdate: '2001-10-10', country: 'Ireland', career: 'coder', family: [] }
var james = { name: 'James', birthdate: '1990-11-11', country: 'Scotland', career: 'coder', family: [] }

// assistent (delegated)

function doOn(person, callback) {
    console.log('Doing ' + callback.name + ' on ' + person.name + ' (at time ' + new Date().toLocaleTimeString() + ')')

    callback(person)
}

// purposes

function printInfo(person) {
    console.log(person.name)
    console.log('- birthdate: ' + person.birthdate)
    console.log('- country: ' + person.country)
    console.log('- career: ' + person.career)
}

function addWendyToFamily(person) {
    console.log(person.name)
    person.family.push(wendy)
    console.log(person.family)
}

function addPeterToFamily(person) {
    console.log(person.name)
    person.family.push(peter)
    console.log(person.family)
}

function printAge(person) {
    var nowDate = new Date
    var birthDate = new Date(person.birthdate)
    var age = nowDate.getFullYear() - birthDate.getFullYear()
    console.log(person.name)
    console.log('- age: ' + age)
}

// CASE 1: print person info

// Peter
// - birthdate: 2000-01-01
// - country: England
// - career: coder
doOn(peter, printInfo)

// Wendy
// - birthdate: 2001-10-10
// - country: England
// - career: coder
doOn(wendy, printInfo)

doOn(james, printInfo)

// CASE 2: add family to person

doOn(peter, addWendyToFamily)
doOn(wendy, addPeterToFamily)
doOn(james, addWendyToFamily)
doOn(james, addPeterToFamily)

// CASE 3: get person age

doOn(peter, printAge)
doOn(wendy, printAge)
doOn(james, printAge)

// VM1846: 8 Doing printInfo on Peter(at time 15: 11: 13)
// VM1846: 16 Peter
// VM1846: 17 - birthdate: 2000-01-01
// VM1846: 18 - country: England
// VM1846: 19 - career: coder
// VM1846: 8 Doing printInfo on Wendy(at time 15: 11: 13)
// VM1846: 16 Wendy
// VM1846: 17 - birthdate: 2001 - 10 - 10
// VM1846: 18 - country: Ireland
// VM1846: 19 - career: coder
// VM1846: 8 Doing printInfo on James(at time 15: 11: 13)
// VM1846: 16 James
// VM1846: 17 - birthdate: 1990 - 11 - 11
// VM1846: 18 - country: Scotland
// VM1846: 19 - career: coder
// VM1846: 8 Doing addWendyToFamily on Peter(at time 15: 11: 13)
// VM1846: 23 Peter
// VM1846: 25[{… }]
// VM1846: 8 Doing addPeterToFamily on Wendy(at time 15: 11: 13)
// VM1846: 29 Wendy
// VM1846: 31[{… }]
// VM1846: 8 Doing addWendyToFamily on James(at time 15: 11: 13)
// VM1846: 23 James
// VM1846: 25[{… }]
// VM1846: 8 Doing addPeterToFamily on James(at time 15: 11: 13)
// VM1846: 29 James
// VM1846: 31(2)[{… }, {… }]
// VM1846: 8 Doing printAge on Peter(at time 15: 11: 13)
// VM1846: 38 Peter
// VM1846: 39 - age: 24
// VM1846: 8 Doing printAge on Wendy(at time 15: 11: 13)
// VM1846: 38 Wendy
// VM1846: 39 - age: 23
// VM1846: 8 Doing printAge on James(at time 15: 11: 13)
// VM1846: 38 James
// VM1846: 39 - age: 34
// undefined