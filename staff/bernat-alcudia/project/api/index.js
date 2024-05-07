import dotenv from "dotenv";

dotenv.config()

import mongoose from 'mongoose';
import express from 'express'
import logic from '/.logic/index.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import { errors } from "com";

const { JsonWebTokenError, TokenExpiredError } = jwt

const { PORT, MONGO_URL, JWT_SECRET } = process.env

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`DB connected at ${MONGO_URL}`)

        const server = express()

        const jsonBodyParser = express.json()

        server.use(cors())

        // ---------------------------------Register Buyer---------------------------------
        server.post('/user/buyer', jsonBodyParser, (req, res) => {
            try {
                const { email, name, password, username, birthdate } = req.body

                logic.registerBuyer(name, birthdate, email, username, password)
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

        // ---------------------------------Register Seller---------------------------------
        server.post('/user/seller', jsonBodyParser, (req, res) => {
            try {
                const { email, name, password, username, birthdate } = req.body //Get params from body

                logic.registerSeller(name, birthdate, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof DuplicityError)
                            status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500//Change status to take error

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // ---------------------------------Authenticate User---------------------------------
        server.post('/users/buyers-sellers/auth', jsonBodyParser, (req, res) => {
            try {
                const { username, password } = req.body

                logic.authenticateUser(username, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId, sub: role }, JWT_SECRET, { expiresIn: '60m' })

                        res.status(200).json(token)
                    })
            } catch (error) {
                let status = 500

                if (error instanceof MatchError) status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // ---------------------------------Retrieve User---------------------------------
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
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError)
                    status = 401

                error = new MatchError(error.message)
            }
            res.status(status).json({ error: error.constructor.name, message: error.message })
        })

        // ---------------------------------Create Product---------------------------------
        server.post('/products', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { images, title, description, brand, price, state, stock, likes } = req.body

                logic.createProduct(userId, images, title, description, brand, price, state, stock, likes)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 401

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                }
                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // ---------------------------------Retrieve Products---------------------------------
        server.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.retrieveProducts(userId)
                    .then(product => res.json(products))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 404

                        res.status(status).json({ error: error.constructor, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError)
                    status = 401

                error = new MatchError(error.message)
            }
            res.status(status).json({ error: error.constructor.name, message: error.message })
        })
    })