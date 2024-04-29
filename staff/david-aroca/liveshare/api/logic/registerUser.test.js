import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('CASE 1: it success on create a new user')

        try {
            registerUser('Pepito Grillo 5', '2000-01-05', 'pepito@grillo21.com', 'pepitogrillo6', '123123123')
                .then(() => {
                    console.log({ test: 'Case 1 success', res: 'user created' })
                })
                .catch(error => console.error({ test: 'Case 1 failed', res: error.message }))

                .finally(() => {
                    console.log('CASE 2: it fails on create user with a existent username')

                    registerUser('Pepito Grillo 5', '2000-01-05', 'pepito@grillo8.com', 'pepitogrillo8', '123123123')
                        .then(() => console.error({ test: 'Case 2 failed', res: 'user created' }))

                        .catch(error => console.log({ test: 'Case 2 success', res: error.message }))

                        .finally(() => {
                            console.log('CASE 3: it fails on invalid email')

                            try {
                                registerUser(true, '2000-01-05', 'pepitogrillo8.com', 'pepitogrillo8', '123123123')

                                    .then(() => console.error({ test: 'Case 3: failed', res: 'user registered' }))

                                    .catch(error => console.error({ test: 'Case 3: failed', res: error.message }))
                            } catch (error) {
                                const resOk = error.message === 'email has no @'

                                const test = resOk ? 'Case 3: success' : 'Case 3: failed'

                                console.log({ test, res: error.message })
                            }
                        })
                })
        } catch (error) {
            console.error(error)
        }
    })
