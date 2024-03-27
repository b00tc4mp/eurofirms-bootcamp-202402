const body = new Component
body.container = document.body

const title = new Component('h1')
title.setText('Hangman')
body.add(title)

let failsCount

let assertionsCount

let startForm = new StartForm
let charBoxes
let hangman

let charsUsed = []
let guessForm = new GuessForm
body.add(startForm)
startForm.onSubmit(words => {
    sessionStorage.secret = words

    body.remove(startForm)

    charBoxes = new CharBoxes(words)

    hangman = new Hangman(150, 200)

    body.add(hangman)

    body.add(charBoxes)

    body.add(guessForm)

    startForm.reset()
    failsCount = 0
    assertionsCount = 0
    charsUsed = []
})

guessForm.onSubmit(char => {
    if (!charsUsed.includes(char)) {
        charsUsed.push(char)

        const secret = sessionStorage.secret

        for (const i in secret) {
            const charToCompare = secret[i]
            if (char === charToCompare) {
                charBoxes.showChar(i)
                assertionsCount++
            }
        }

        if (assertionsCount === secret.length) {
            setTimeout(function () {
                alert('You win!')

                body.remove(guessForm)
                body.remove(hangman)
                body.remove(charBoxes)
                body.add(startForm)
            }, 1000)
        }

        if (!secret.includes(char)) {
            failsCount++

            if (failsCount === 6) {
                alert('game over. The solution was ' + sessionStorage.secret)
                body.remove(guessForm)
                body.remove(hangman)
                body.remove(charBoxes)
                body.add(startForm)
            } else {
                hangman.setFails(failsCount)
                console.log('fallo')
            }
        }
        guessForm.reset()
    } else alert('char was already used')

})