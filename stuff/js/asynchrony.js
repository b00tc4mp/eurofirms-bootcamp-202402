const before = performance.now()
const getTimestamp = () => ((performance.now() - before) / 1000).toPrecision(10)

const setTimeoutSync = (callback, timeout) => {
    const before = Date.now()

    //while(Date.now() - before < timeout);
    for (; Date.now() - before < timeout;);

    callback()
}

console.log(1, getTimestamp())

setTimeout(() => console.log(2, getTimestamp()), 1000)
setTimeoutSync(() => console.log(6, getTimestamp()), 2000)

console.log(3, getTimestamp())

setTimeout(() => console.log(7, getTimestamp()), 100)
setTimeoutSync(() => console.log(8, getTimestamp()), 2000)

console.log(4, getTimestamp())

console.log(5, getTimestamp())

// 1,6,3,8,4,5,2,7
// VM2770: 13 1 '0.000000000'
// VM2770: 16 6 '1.999000000'
// VM2770: 18 3 '1.999000000'
// VM2770: 21 8 '4.000000000'
// VM2770: 23 4 '4.000000000'
// VM2770: 25 5 '4.000000000'
// undefined
// VM2770: 15 2 '4.000000000'
// VM2770: 20 7 '4.000000000'