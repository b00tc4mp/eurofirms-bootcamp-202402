function slice(string, start, end) {
    result = ""
    if (start === undefined || typeof start !== "number")
        start = 0
    if (end === undefined || typeof end !== "number")
        end = string.length
    if (start < 0)
        start = string.length + start
    if (end < 0)
        end = string.length + end
    for (i = start; i < end; i++) {
        result += string[i]
    }

    return result
}

var sssssssssssssstring = "The morning is upon us. Be aware about it"

console.log(slice(sssssssssssssstring))
console.log(slice(sssssssssssssstring, 2))
console.log(slice(sssssssssssssstring, 1, 5))
console.log(slice(sssssssssssssstring, -1))
console.log(slice(sssssssssssssstring, -2, -1))