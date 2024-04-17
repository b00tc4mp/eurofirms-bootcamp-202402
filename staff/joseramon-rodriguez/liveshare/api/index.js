import mongoose from "mongoose"
import express from 'express'
import logic from './logic/index.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('DB connected')

        // function retrievePostsFromUser(userId, targetUserId, callback) {
        //     //TODO field validations
        // }

        const server = express()

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        server.get('/users/:userId', (req, res) => {
            const userId = req.params.userId

            try {
                logic.retrieveUser(userId)
                    .then((user) => res.status(200).json(user).send())
                    .catch(error => res.status(500).json({
                        error: error.constructor.name, message: error.message
                    }))

            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        const jsonBodyParser = express.json()

        server.post('/users', jsonBodyParser, (req, res) => {
            const { name, birthdate, email, username, password } = req.body
            try {
                logic.registerUser(name, birthdate, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json({
                        error: error.constructor.name, message: error.message
                    }))
            } catch (error) {
                res.status(500).json({
                    error: error.constructor.name, message: error.message
                })
            }
        })

        server.post('/users/auth', jsonBodyParser, (req, res) => {
            const user = req.body

            try {
                logic.authenticateUser(user.username, user.password)
                    .then((id) => res.status(201).json({ message: 'user logged in', userId: id }).send())
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        server.get('/posts/', (req, res) => {
            try {
                const userId = req.headers.authorization

                userId.slice(7)

                logic.retrievePosts(userId)
                    .then(posts => res.status(200).json(posts))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = authorization.slice(7)

                const { image, text } = req.body

                logic.createPost(userId, text, image)
                    .then(() => { res.status(201).send() })
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        server.listen(8080, () => console.log('API started'))
    })
    .catch(error => console.error(error))