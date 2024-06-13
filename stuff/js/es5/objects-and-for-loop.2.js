var company = {
    minSalary: 1000,
    maxSalary: 2000
}

for (var value = company.minSalary; value <= company.maxSalary; value = value + 100) {
    var midSalary = value

    console.log(midSalary)
}
// VM2656: 9 1000
// VM2656: 9 1100
// VM2656: 9 1200
// VM2656: 9 1300
// VM2656: 9 1400
// VM2656: 9 1500
// VM2656: 9 1600
// VM2656: 9 1700
// VM2656: 9 1800
// VM2656: 9 1900
// VM2656: 9 2000