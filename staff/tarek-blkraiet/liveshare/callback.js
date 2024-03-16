/*var peter = { name: 'Peter', birthdate: '2000-01-01', country: 'England', career: 'coder', family: [] }
var wendy = { name: 'Wendy', birthdate: '2001-10-10', country: 'Ireland', career: 'coder', family: [] }

// CASE 1: print person info

// Peter
// - birthdate: 2000-01-01
// - country: England
// - career: coder
console.log(peter.name)
console.log('- birthdate: ' + peter.birthdate)
console.log('- country: ' + peter.country)
console.log('- career: ' + peter.career)

// Wendy
// - birthdate: 2001-10-10
// - country: England
// - career: coder
console.log(wendy.name)
console.log('- birthdate: ' + wendy.birthdate)
console.log('- country: ' + wendy.country)
console.log('- career: ' + wendy.career)

// CASE 2: add family to person

peter.family.push(wendy)

wendy.family.push(peter)

// CASE 3: get person age

var nowDate = new Date
var birthDate = new Date(peter.birthdate)
var age = nowDate.getFullYear() - birthDate.getFullYear()
console.log(peter.name)
console.log('- age: ' + age)

var nowDate = new Date
var birthDate = new Date(wendy.birthdate)
var age = nowDate.getFullYear() - birthDate.getFullYear()
console.log(wendy.name)
console.log('- age: ' + age)

*/

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
