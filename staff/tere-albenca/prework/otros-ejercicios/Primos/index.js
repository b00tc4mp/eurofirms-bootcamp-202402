function isPrime(number) {
    if (number <= 1) {
        return false;
    } else if (number <= 3) {
        return true;
    } else if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

const number = 10;
if (isPrime(number)) {
    console.log(number + ': '+ 'este es un número primo.');
} else {
    console.log(number + ': ' + " este no es un número primo.");
}
