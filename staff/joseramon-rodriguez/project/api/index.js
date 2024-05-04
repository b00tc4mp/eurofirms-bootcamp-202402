import dotenv from 'dotenv'

dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { MatchError, DuplicityError, ContentError } = errors
const { JsonWebTokenError, TokenExpiredError } = jwt

const { PORT, MONGO_URL, JWT_SECRET } = process.env

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`DB connected at ${MONGO_URL}`)

        const server = express()

        const jsonBodyParser = express.json()

        server.use(cors())

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { username, email, password, birthdate, wallet } = req.body

                logic.registerUser(username, email, password, birthdate, wallet)
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

        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { username, password } = req.body

                logic.authecticateUser(username, password)
                    .then((userId) => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '30m' })

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

        server.listen(PORT, () => console.log(`API started on port ${PORT}`))
    })
    .catch(error => console.error(error))