import base64 from 'base-64'
function extractPayload(token) {
    const [, payload64,] = token.split('.')
    const payloadJSON = base64.decode(payload64)
    const payload = JSON.parse(payloadJSON)

    return payload
}

function formatDate(date) {
    const day = date.getDate(date)

    const dayToString = day < 10 ? '0' + day : day
    const month = date.getMonth() + 1
    const monthToString = month < 10 ? '0' + month : month

    const year = date.getFullYear()

    // dia-mes-año
    const formattedDate = `${dayToString}-${monthToString}-${year}`

    return formattedDate
}



const utils = {
    extractPayload,
    formatDate
}

export default utils