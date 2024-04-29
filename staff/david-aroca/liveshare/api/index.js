import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.js'
import cors from 'cors'
import errors from './logic/errors.js'


const { ContentError, DuplucityError, MatchError, SystemError } = errors

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('DB Conected')

        const server = express()

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        const jsonBodyParser = express.json() //JSON.PARSE(...)

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, birthdate, email, username, password } = req.body
                logic.registerUser(name, birthdate, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => {

                        let status = 500
                        if (error instanceof DuplucityError)
                            status = 409
                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })

            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400

                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { username, password } = req.body

                logic.authenticateUser(username, password)
                    .then(userId => res.status(200).json(userId))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 401

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.get('/users/:targetUserId', (req, res) => {
            try {
                const targetUserId = req.params.targetUserId

                const { authorization } = req.headers

                const userId = authorization.slice(7)

                logic.retrieveUser(userId, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = authorization.slice(7)

                const { image, text } = req.body

                logic.createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 401

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })


            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)

                    status = 400

                        (res.status(status).json({ error: error.constructor.name, message: error.message }))
            }
        })

        server.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = authorization.slice(7)

                logic.retrievePosts(userId)
                    .then(posts => res.json(posts))
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
                    .then(() => res.status(204).send())
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
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof ContentError || error instanceof TypeError || error instanceof RangeError)

                            res.status(status).json({ error: error.constructor.name, message: error.message })
                    })

            } catch (error) {
                let status = 500

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })


        server.listen(8080, () => console.log('API STARTED RUNNING'))
    })
    .catch(error => console.error(error))