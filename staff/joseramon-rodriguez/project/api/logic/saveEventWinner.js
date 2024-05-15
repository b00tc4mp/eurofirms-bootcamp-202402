//TODO

function saveEventWinner(name, description, players, startDate, endDate, winner) {
    //calculate event code ? set winner : error
    const eventCodeJson = JSON.stringify({ name, description, players, startDate, endDate })
    const eventCode = btoa(eventCodeJson)
}
export default saveEventWinner