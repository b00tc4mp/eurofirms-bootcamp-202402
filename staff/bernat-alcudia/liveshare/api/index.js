import dotenv from 'dotenv'

dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import logic from './logic/index.js'
import jwt from 'jsonwebtoken'

import { errors, validate } from 'com'

const { JsonWebTokenError, TokenExpiredError } = jwt
const { ContentError, DuplicityError, MatchError } = errors
const { PORT, MONGO_URL, JWT_SECRET } = process.env


mongoose.connect(MONGO_URL)
    .then(() => {

        const server = express()

        const jsonBodyParser = express.json()

        server.use(cors())
        // -------------------------User register----------------------------------------------------------------
        server.post('/users', jsonBodyParser, (req, res) => {
            const user = req.body
            try {
                logic.registerUser(name, birthdate, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof DuplicityError) status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })

            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }

        })


        // -------------------------Authenticate User----------------------------------------------------------------
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const user = req.body
                logic.authenticateUser(username, password)
                    .then((userId) => { const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '30m' }) })
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 401
                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })



        // -------------------------Retrieve  User----------------------------------------------------------------
        server.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { targetUserId } = req.params

                logic.retrieveUser(userId, targetUserId)
                    .then(user => res.status(200).json(user))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError || error instanceof TypeError || error instanceof ContentError) {
                            status = 400
                        }
                        else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                            status = 401

                            error = new MatchError(error.message)
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {

                let status = 500

                if (error instanceof MatchError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
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
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError || error instanceof TypeError || error instanceof ContentError) {
                            status = 400
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {

                let status = 500

                if (error instanceof MatchError) {
                    status = 404
                }
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })


        // -------------------------Delete Post----------------------------------------------------------------
        server.delete('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { postId } = req.params

                logic.removePost(userId, postId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError || error instanceof TypeError || error instanceof ContentError) {
                            status = 400
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {

                let status = 500

                if (error instanceof MatchError) {
                    status = 404
                }
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })


        // -------------------------Retrieve Post----------------------------------------------------------------
        server.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers
                const userId = authorization.slice(7)

                logic.retrievePosts(userId)
                    .then(posts => res.status(200).json(posts))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError || error instanceof TypeError || error instanceof ContentError) {
                            status = 400
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {

                let status = 500

                if (error instanceof MatchError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })


        // -------------------------Update Post----------------------------------------------------------------
        server.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { postId } = req.params
                const { text } = req.body

                logic.updatePost(userId, postId, text)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError || error instanceof TypeError || error instanceof ContentError) {
                            status = 400
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {

                let status = 500

                if (error instanceof MatchError) {
                    status = 404
                }
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.listen(PORT, () => console.log(`Api started on port ${PORT}`))
    })
    .catch(error => console.error(error))



