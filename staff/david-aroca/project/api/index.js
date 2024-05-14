import dotenv from 'dotenv'

dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import { errors } from 'com'

const { JsonWebTokenError, TokenExpiredError } = jwt
const { ContentError, DuplicityError, MatchError } = errors

const { PORT, MONGO_URL, JWT_SECRET } = process.env

mongoose.connect(MONGO_URL)
    .then(() => {

        const server = express()

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        const jsonBodyParser = express.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, birthdate, email, username, password } = req.body

                logic.registerUser(name, birthdate, email, username, password)
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

                res.status(status).json({ error: error.constructor.name, error: error.message })
            }
        })

        // --------------------------------------------------------------------//

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, birthdate, email, username, password } = req.body

                logic.registerTrainer(name, birthdate, email, username, password)
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

                res.status(status).json({ error: error.constructor.name, error: error.message })
            }
        })


        // --------------------------------------------------------------------//


        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { username, password } = req.body

                logic.authenticateUser(username, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '180m' })

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
        // --------------------------------------------------------------------//

        server.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { targetUserId } = req.params

                logic.retrieveUser(user.id, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: constructor.name, message: error.message })
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

        // --------------------------------------------------------------------//

        server.post('/exercises', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { title, image, video, description } = req.body

                logic.createExercise(user.id, title, image, video, description)
                    .then(() => res.status(201).send())
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
        // --------------------------------------------------------------------//


        server.post('/diets', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { title, image, video, description } = req.body

                logic.createDiet(user.id, title, image, video, description)
                    .then(() => res.status(201).send())
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

        // --------------------------------------------------------------------//

        server.get('/exercises', (req, res) => {
            try {

                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                logic.retrieveExercises(user.id)
                    .then(exercises => res.json(exercises))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: message.constructor.names, message: error.message })
                    })

            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {

                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: message.constructor.names, message: error.message })
            }
        })

        // --------------------------------------------------------------------//
        server.get('/diets', (req, res) => {
            try {

                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                logic.retrieveDiet(user.id)
                    .then(diets => res.json(diets))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: message.constructor.names, message: error.message })
                    })

            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {

                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: message.constructor.names, message: error.message })
            }
        })


        // --------------------------------------------------------------------//


        server.delete('/exercises/:exerciseId', (req, res) => {

            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { exerciseId } = req.params

                logic.removeExercise(user.id, exerciseId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }
        })

        // --------------------------------------------------------------------//

        server.delete('/diets/:dietId', (req, res) => {

            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { dietId } = req.params

                logic.removeDiet(user.id, dietId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }
        })
        // --------------------------------------------------------------------//
        server.patch('/exercises/:exerciseId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { exerciseId } = req.params

                const { title, image, video, description } = req.body

                logic.modifyExercise(user.id, exerciseId, title, image, video, description)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500
                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }
        })

        // --------------------------------------------------------------------//

        server.patch('/diets/:dietId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { dietId } = req.params

                const { title, image, video, description } = req.body

                logic.modifyDiet(user.id, dietId, title, image, video, description)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500
                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }
        })

        // --------------------------------------------------------------------//
        server.post('/measurements', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { date, weight, torso, legs } = req.body

                logic.createMeasurement(user.id, date, weight, torso, legs)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500
                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }

        })
        // --------------------------------------------------------------------//
        server.get('/measurements', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                logic.retrieveMeasurement(user.id)
                    .then(measurements => res.json(measurements))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })

            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }
        })
        // --------------------------------------------------------------------//
        server.patch('/measurements/:measurementId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { measurementId } = req.params

                const { date, weight, torso, legs } = req.body

                logic.modifyMeasurement(user.id, measurementId, date, weight, torso, legs)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }
        })
        // --------------------------------------------------------------------//

        server.delete('/measurements/:measurementId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: user } = jwt.verify(token, JWT_SECRET)

                const { measurementId } = req.params

                logic.removeMeasurement(user.id, measurementId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500
                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: errors.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: errors.constructor.name, message: error.message })
            }
        })

        // --------------------------------------------------------------------//





        // cuando tenga que llamar a la api con cualquier cosa que utilize un user id hay que pasar el user y luego acceder a la propiedad id
        // const { sub: user } = jwt.verify(token, JWT_SECRET)

        // const { targetUserId } = req.params

        // logic.retrieveUser(user.id, targetUserId)


        server.listen(PORT, () => console.log(`API STARTED ON PORT ${PORT}`))
    })
    .catch(error => console.log(error))
