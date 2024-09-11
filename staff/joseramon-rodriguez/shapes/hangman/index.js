const body = new Component
body.container = document.body

const title = new Component('h1')
title.setText('Hangman')
body.add(title)

const startForm = new StartForm
const guessForm = new GuessForm
let charBoxes
let hangman
let failsCount = 0
let assertionsCount = 0
let charsUsed = []

body.add(startForm)

startForm.onSubmit(words => {
    sessionStorage.secret = words

    body.remove(startForm)

    charBoxes = new CharBoxes(words)

    hangman = new Hangman(150, 200)
    body.add(hangman)

    body.add(charBoxes)

    startForm.reset()

    failsCount = 0

    assertionsCount = 0

    charsUsed = []

    body.add(guessForm)
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
                hangman.setFails(failsCount)
                setTimeout(function () {
                    alert('game over. The solution was ' + sessionStorage.secret)

                    body.remove(guessForm)
                    body.remove(hangman)
                    body.remove(charBoxes)
                    body.add(startForm)
                }, 1000)
            } else {
                hangman.setFails(failsCount)
                console.log('fallo')
            }
        }
        guessForm.reset()
    } else {
        guessForm.reset()

        alert('char was already used')
    }
})