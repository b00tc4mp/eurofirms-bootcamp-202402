var o = { name: 'Oswald', age: 30 }

/*
var p = {}
//p['name'] = o['name']
//p['age'] = o['age']
p.name = o.name
p.age = o.age
*/

var p = { ...o }

console.log(p)
console.log(o === p)

// VM3068: 9 { name: 'Oswald', age: 30 }
// VM3068: 10 false