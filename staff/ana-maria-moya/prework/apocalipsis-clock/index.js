function paint(days, hours, minutes, seconds){
    const htmlDays = document.querySelector("#days-value")
    const htmlHours = document.querySelector("#hours-value")
    const htmlMinutes= document.querySelector("#minutes-value")
    const htmlSeconds = document.querySelector("#seconds-value")

    htmlDays.innerText = days
    htmlHours.innerText = hours > 9 ? hours : `0${hours}`
    htmlMinutes.innerText = minutes > 9 ? minutes : `0${minutes}`
    htmlSeconds.innerText = seconds > 9 ? seconds : `0${seconds}`
}


// function updateCountDown2() {
//     const actualDate = Date.now() / 1000
//     const doomsDay = 2147483647
//     const timeLeft = doomsDay - actualDate

//     const days = Math.floor((timeLeft / 3600) / 24)

//     const hours = (timeLeft / 3600) % 24
//     const hoursToPaint = Math.floor(hours)
//     const hoursRemained = hours - Math.floor(hours)

//     const minutes = Math.floor(hoursRemained * 60)
//     const minutesRemained = (hoursRemained * 60) - minutes

//     const seconds = Math.floor(minutesRemained * 60)

//     console.log({ days, hoursToPaint, minutes, seconds })
// }

function updateCountDown() {
    const actualDate = Date.now() / 1000
    const doomsDay = 2147483647

    const secondsLeft = doomsDay - actualDate
    const minutesLeft = secondsLeft / 60
    const hoursLeft = minutesLeft / 60
    const daysLeft = hoursLeft / 24

    const secondsLeftToPrint = Math.floor(secondsLeft % 60)
    const minutesLeftToPrint = Math.floor(minutesLeft % 60)
    const hoursLeftToPrint = Math.floor(hoursLeft % 24)
    const daysLeftToPrint = Math.floor(daysLeft)


    return { daysLeftToPrint, hoursLeftToPrint, minutesLeftToPrint, secondsLeftToPrint }
}

setInterval(() => {
    const timeLeft = updateCountDown()

    const { daysLeftToPrint, hoursLeftToPrint, minutesLeftToPrint, secondsLeftToPrint } = timeLeft
    paint( daysLeftToPrint, hoursLeftToPrint, minutesLeftToPrint, secondsLeftToPrint)
}, 1000)


