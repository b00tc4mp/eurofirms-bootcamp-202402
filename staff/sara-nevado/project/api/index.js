import dotenv from 'dotenv'

dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { JsonWebTokenError, TokenExpiredError } = jwt
const { ContentError, DuplicityError, MatchError, SystemError } = errors
const { PORT, MONGO_URL, JWT_SECRET } = process.env

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`DB connected at ${MONGO_URL}`)

        const server = express()

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        const jsonBodyParser = express.json()

        server.use(cors())

        // registerUser
        server.post('/users/', jsonBodyParser, (req, res) => {
            try {
                const { name, email, surname, password } = req.body

                logic.registerUser(name, surname, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof DuplicityError)
                            status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // authenticateUser
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.authenticateUser(email, password)
                    .then(user => {
                       // const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '30m' })
                        const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '60m' })
                        res.status(200).json(token)
                    })
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

        // retrieveUser
        server.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { targetUserId } = req.params

                logic.retrieveUser(userId, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // registerAdmin
        server.post('/admins/', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                if (!authorization) {
                    return res.status(401).json({ error: 'Unauthorized', message: 'Authorization header is missing' })
                }

                const tokenPrefix = 'Bearer '
                if (!authorization.startsWith(tokenPrefix)) {
                    return res.status(401).json({ error: 'Unauthorized', message: 'Invalid authorization format' })
                }

                const token = authorization.slice(tokenPrefix.length)

                const { name, username, email, password } = req.body

                logic.registerAdmin(name, username, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof DuplicityError)
                            status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

     // createEvent 
server.post('/events', jsonBodyParser, (req, res) => {
    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json({ error: 'Unauthorized', message: 'No authorization token provided' })
        }

        const token = authorization.slice(7)
        const { sub: userId, role: userRole } = jwt.verify(token, JWT_SECRET)

        const { day, text } = req.body

        logic.createEvent(day, text, userRole)
            .then(() => res.status(201).send())
            .catch(error => {
                let status = 500

                if (error instanceof MatchError) {
                    status = 404
                } else if (error instanceof DuplicityError) {
                    status = 409
                } else if (error instanceof SystemError) {
                    status = 500
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
            status = 400
        } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
            status = 401
            error = new MatchError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})


   // editEvent 
server.put('/events/:eventId', jsonBodyParser, (req, res) => {
    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json({ error: 'Unauthorized', message: 'No authorization token provided' })
        }

        const token = authorization.slice(7)
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        const { eventId } = req.params
        const { day, text } = req.body

        logic.editEvent(userId, eventId, day, text)
            .then(() => res.status(200).json({ message: 'Event edited successfully' }))
            .catch(error => {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                    status = 400
                } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401
                    error = new MatchError(error.message)
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
            status = 400
        } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
            status = 401
            error = new MatchError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// deleteEvent 
server.delete('/events/:eventId', (req, res) => {
    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json({ error: 'Unauthorized', message: 'No authorization token provided' })
        }

        const token = authorization.slice(7)
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        const { eventId } = req.params

        logic.deleteEvent(userId, eventId)
            .then(() => res.status(200).json({ message: 'Event deleted successfully' }))
            .catch(error => {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                    status = 400
                } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401
                    error = new MatchError(error.message)
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
            status = 400
        } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
            status = 401
            error = new MatchError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})


        // selectedEvent
        server.post('/events/select', jsonBodyParser, async (req, res) => {
            try {
                const { eventId, userId } = req.body
                const token = req.headers.authorization?.split(' ')[1]
                const decodedToken = jwt.verify(token, JWT_SECRET)
                const authenticatedUserId = decodedToken.sub

                if (authenticatedUserId !== userId) {
                    throw new Error('Unauthorized: Provided userId does not match authenticated user')
                }

                await logic.selectedEvent(eventId, userId)

                res.status(201).json({ message: 'Event selected successfully' })
            } catch (error) {
                let status = 500
                let errorMessage = 'Internal Server Error'

                if (error instanceof DuplicityError) {
                    status = 409
                    errorMessage = error.message
                } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401
                    errorMessage = 'Unauthorized: Invalid or expired token'
                } else if (error instanceof SystemError || error.message === 'Unauthorized: Provided userId does not match authenticated user') {
                    errorMessage = error.message
                }

                res.status(status).json({ error: error.constructor.name, message: errorMessage })
            }
        })

        // deselectedEvent
        server.delete('/events/deselect/:eventId', async (req, res) => {
            try {
                const { eventId } = req.params
                const token = req.headers.authorization?.split(' ')[1]
                const decodedToken = jwt.verify(token, JWT_SECRET)
                const authenticatedUserId = decodedToken.sub

                await logic.deselectedEvent(eventId, authenticatedUserId)

                res.status(200).json({ message: 'Event deselected successfully' })
            } catch (error) {
                let status = 500

                let errorMessage = 'Internal Server Error'

                if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401
                    errorMessage = 'Unauthorized: Invalid or expired token'
                } else if (error instanceof SystemError) {
                    errorMessage = error.message
                }

                res.status(status).json({ error: error.constructor.name, message: errorMessage })
            }
        })

        // retrieveEvent
        server.get('/event/:eventId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { eventId } = req.params

                logic.retrieveEvent(userId, eventId)
                    .then(event => res.json(event))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) {
                            status = 401
                        } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                            status = 401
                            error = new MatchError(error.message)
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401
                    error = new MatchError(error.message)
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.listen(PORT, () => console.log(`API started on port ${PORT}`))
    })
    .catch(error => console.error(error))
