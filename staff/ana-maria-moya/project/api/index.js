import dotenv from 'dotenv'

dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import { errors } from 'com'

const { JsonWebTokenError, TokenExpiredError} =  jwt
const { ContentError, DuplicityError, MatchError} = errors

const { PORT, MONGO_URL, JWT_SECRET } = process.env

mongoose.connect(MONGO-URL)
.then(() => {
    console.log(`DB connected at ${MONGO_URL}`) 

    const server = express()

    server.get('/', (req,res) => res.json({ hello: 'client'}))

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

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })
})