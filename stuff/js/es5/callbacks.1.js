var peter = { name: 'Peter', birthdate: '2000-01-01', country: 'England', career: 'coder', family: [] }
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



