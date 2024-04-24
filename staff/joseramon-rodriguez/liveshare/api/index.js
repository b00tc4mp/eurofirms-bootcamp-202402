import mongoose from "mongoose"
import express from 'express'
import logic from './logic/index.js'
import cors from 'cors'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('DB connected')

        // function retrievePostsFromUser(userId, targetUserId, callback) {
        //     //TODO field validations
        // }

        const server = express()

        const jsonBodyParser = express.json()

        server.use(cors())

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        server.get('/users/:targetUserId', (req, res) => {
            const targetUserId = req.params.targetUserId

            const { authorization } = req.headers

            const userId = authorization.slice(7)

            try {
                logic.retrieveUser(userId, targetUserId)
                    .then((user) => res.status(200).json(user))
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })



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
                    .then((userId) => res.status(200).json(userId))
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        server.get('/posts', (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)

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

        server.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = authorization.slice(7)

                const { postId } = req.params

                const { text } = req.body

                logic.updatePost(userId, postId, text)
                    .then(() => { res.status(200).send() })
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        server.delete('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = authorization.slice(7)

                const { postId } = req.params


                logic.deletePost(userId, postId)
                    .then(() => { res.status(204).send() })
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        server.listen(8080, () => console.log('API started'))
    })
    .catch(error => console.error(error))