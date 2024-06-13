const o = { 0: 'A', 1: 'B', 2: 'C', length: 3 }

for (const i in o)
    console.log(i, o[i])
// VM349:4 0 A
// VM349:4 1 B
// VM349:4 2 C
// VM349:4 length 3