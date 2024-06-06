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

                        const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '300m' })
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
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET);
                const { type, title, date, duration, address, description } = req.body

                logic.createEvent({ userId, type, title, date, duration, address, description })
                    .then(newEvent => res.status(201).json(newEvent))
                    .catch(error => {
                        let status = 500;

                        if (error instanceof DuplicityError)
                            status = 409;
                        else if (error instanceof MatchError)
                            status = 404;
                        else if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                            status = 400;
                        } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                            status = 401;
                            error = new MatchError(error.message);
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    });
            } catch (error) {
                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400;
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401;
                    error = new MatchError(error.message);
                }

                res.status(status).json({ error: error.constructor.name, message: error.message });
            }
        })

        // editEvent
        server.patch('/events/:eventId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { eventId } = req.params;
                const { type, title, date, duration, address, description } = req.body

                logic.editEvent(userId, eventId, { type, title, date, duration, address, description })
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500;

                        if (error instanceof NotFoundError) {
                            status = 404;
                        } else if (error instanceof UnauthorizedError) {
                            status = 403;
                        } else if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                            status = 400;
                        } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                            status = 401;
                            error = new MatchError(error.message);
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    });
            } catch (error) {
                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                    status = 400;
                } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401;
                    error = new MatchError(error.message);
                }

                res.status(status).json({ error: error.constructor.name, message: error.message });
            }
        })


        // deleteEvent
        server.delete('/events/:eventId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { eventId } = req.params

                logic.deleteEvent({ eventId, userId })
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500;

                        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                            status = 400;
                        } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                            status = 401;
                            error = new MatchError(error.message);
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    });
            } catch (error) {
                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                    status = 400;
                } else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401;
                    error = new MatchError(error.message);
                }

                res.status(status).json({ error: error.constructor.name, message: error.message });
            }
        })


        // selectEvent
        server.put('/events/:eventId/select', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { eventId } = req.params

                logic.selectEvent(userId, eventId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500
                        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                            status = 400
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    });
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        // deselectEvent
        server.put('/events/:eventId/deselect', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { eventId } = req.params

                logic.deselectEvent(userId, eventId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500
                        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                            status = 400
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    });
            } catch (error) {
                res.status(500).json({ error: error.constructor, message: error.message })
            }
        });



        // retrieveEvents
        server.get('/events/:month/:year', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, JWT_SECRET)
                const { month, year } = req.params


                logic.retrieveEvents(Number(month), Number(year))
                    .then(events => res.json(events))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) {
                            status = 404
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



        server.listen(PORT, () => console.log(`API started on port ${PORT}`))
    })
    .catch(error => console.error(error))
