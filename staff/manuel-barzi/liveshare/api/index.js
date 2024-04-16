import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('DB connected')

        const server = express()

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        const jsonBodyParser = express.json() // JSON.parse(...)

        server.post('/users', jsonBodyParser, (req, res) => {
            const { name, birthdate, email, username, password } = req.body

            try {
                logic.registerUser(name, birthdate, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        //     server.get('/users/:userId', (req, res) => {
        //         const userId = req.params.userId

        //         retrieveUser(userId, (error, user) => {
        //             if (error) {
        //                 res.status(404).json({ error: error.constructor.name, message: error.message })

        //                 return
        //             }

        //             res.json(user)
        //         })
        //     })

        server.listen(8080, () => console.log('API started'))
    })
    .catch(error => console.error(error))