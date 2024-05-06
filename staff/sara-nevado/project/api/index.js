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
        console.log(`DB connected at ${MONGO_URL}`)

        const server = express()

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        const jsonBodyParser = express.json()

        server.use(cors())

      

//registerUser
        server.post('/users/', jsonBodyParser, (req, res) => {
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

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })


        //authenticateUser
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { username, password } = req.body

                logic.authenticateUser(username, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, 'las personas del bootcamp 2024 somos la hostia', { expiresIn: '30m' })

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

        //retrieveUser
        server.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const { sub: userId } = jwt.verify(token, 'las personas del bootcamp 2024 somos la hostia')
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

       
        

          server.listen(PORT, () => console.log(`API started on port ${PORT}`))
    })

    .catch(error => console.error(error))
