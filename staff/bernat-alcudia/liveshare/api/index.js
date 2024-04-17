import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {

        const server = express()

        const jsonBodyParser = express.json()


        // -------------------------User register----------------------------------------------------------------
        server.post('/users', jsonBodyParser, (req, res) => {
            const user = req.body
            try {
                logic.registerUser(user.name, user.birthdate, user.email, user.username, user.password)
                    .then(() => res.status(201).send())
                    .catch((error) => res.status(500).json({ error: error.constructor.name, message: error.message }))

            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }

        })


        // -------------------------Authenticate User----------------------------------------------------------------
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const user = req.body
                logic.authenticateUser(user.username, user.password)
                    .then((userId) => { res.status(200).json(userId) })
                    .catch((error) => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })



        // -------------------------Retrieve  User----------------------------------------------------------------
        server.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers
                const userId = authorization.slice(7)
                const { targetUserId } = req.params

                logic.retrieveUser(userId, targetUserId)
                    .then(user => res.status(200).json(user))
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })


        // -------------------------Create Post----------------------------------------------------------------
        server.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const userId = authorization.slice(7)
                const { image, text } = req.body

                logic.createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })


        // -------------------------Retrieve Post----------------------------------------------------------------
        server.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers
                const userId = authorization.slice(7)

                logic.retrievePosts(userId)
                    .then(posts => res.status(200).json(posts))
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })



        server.listen(8080, () => console.log('Api started'))
    })
    .catch(error => console.error(error))

