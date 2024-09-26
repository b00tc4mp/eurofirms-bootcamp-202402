const body = new Component
body.container = document.body

const title = new Component('h1')
title.setText('Hangman')
body.add(title)

const startForm = new StartForm

startForm.onSubmit(words => {
    sessionStorage.secret = words

    body.remove(startForm)

    const charBoxes = new CharBoxes(words)

    body.add(charBoxes)

    const guessForm = new GuessForm

    const charUsed = []
    let assertionsCount = 0
    let failsCount = 0

    guessForm.onSubmit(char => {
        if (charUsed.includes(char)) {
            alert('Character was already used. Try with another one.')

            return
        }

        charUsed.push(char)

        let charFound = false

        for (const i in sessionStorage.secret) {
            const currentChar = sessionStorage.secret[i]

            if (currentChar === char) {
                charFound = true

                charBoxes.showCar(i)

                assertionsCount++
            }
        }

        if (charFound) {
            if (assertionsCount === sessionStorage.secret.length) {
                setTimeout(function () {
                    alert('You win!')

                    body.remove(charBoxes)
                    body.remove(guessForm)
                    body.remove(hangman)

                    body.add(startForm)
                }, 100)
            }

            return
        }

        failsCount++

        hangman.setFails(failsCount)

        if (failsCount === 6) {
            setTimeout(function () {
                alert('Game Over.')

                body.remove(charBoxes)
                body.remove(guessForm)
                body.remove(hangman)

                body.add(startForm)
            }, 100)
        }
    })

    body.add(guessForm)

    const hangman = new Hangman(150, 200)
    hangman.setLocation(100, 300)

    body.add(hangman)
})

body.add(startForm)