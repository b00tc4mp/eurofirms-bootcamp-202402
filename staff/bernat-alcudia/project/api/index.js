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

        const jsonBodyParser = express.json({ limit: '50mb' })

        server.use(cors())

        // ---------------------------------Register Buyer---------------------------------
        server.post('/users/buyers', jsonBodyParser, (req, res) => {
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
        server.post('/users/sellers', jsonBodyParser, (req, res) => {
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
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { username, password } = req.body

                logic.authenticateUser(username, password)
                    .then(user => {
                        const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '60m' })
                        res.status(200).json(token)
                    })
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
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

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
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

                    res.status(status).json({ error: error.constructor.name, message: error.message })
                }
            }
        })

        // ---------------------------------Retrieve Products ---------------------------------
        server.get('/products', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.retrieveProducts(userId)
                    .then(products => res.json(products))
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
                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // ---------------------------------Products Search---------------------------------
        server.get('/products/search', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { query } = req.query

                logic.searchProduct(userId, query)
                    .then(product => res.status(200).json(product))
                    .catch(error => {
                        let status = 500
                        if (error instanceof MatchError) status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400

                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                    res.status(status).json({ error: error.constructor.name, message: error.message })
                }
            }
        })

        // ---------------------------------Retrieve Products Detail---------------------------------
        server.get('/products/:productId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { productId } = req.params

                logic.retrieveProductDetails(userId, productId)
                    .then(product => res.json(product))
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
                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })


        // ---------------------------------Remove Products---------------------------------

        server.delete('/products/:productId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { productId } = req.params

                logic.removeProduct(userId, productId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                    res.status(status).json({ error: error.constructor.name, message: error.message })
                }
            }
        })

        // ---------------------------------Modify Products---------------------------------

        server.patch('/products/:productId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { productId } = req.params

                const { images, title, description, brand, price, state, stock } = req.body

                logic.modifyProduct(userId, productId, images, title, description, brand, price, state, stock)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400

                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                    res.status(status).json({ error: error.constructor.name, message: error.message })
                }
            }
        })

        // ---------------------------------Toggle Like Products---------------------------------

        server.put('/products/:productId/likes', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { productId } = req.params

                logic.toggleLikeProduct(userId, productId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400

                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                    res.status(status).json({ error: error.constructor.name, message: error.message })
                }
            }
        })

        // ---------------------------------Toggle Save Products---------------------------------

        server.put('/products/:productId/saved', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { productId } = req.params

                logic.toggleSaveProduct(userId, productId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400

                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                    res.status(status).json({ error: error.constructor.name, message: error.message })
                }
            }
        })

        // ---------------------------------Retrieve Save Products---------------------------------

        server.get('/products/:userId/saved', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.retrieveSavedProducts(userId)
                    .then(products => res.json(products))
                    .catch(error => {
                        let status = 500

                        if (error instanceof MatchError) status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400

                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
                    status = 401

                    error = new MatchError(error.message)
                    res.status(status).json({ error: error.constructor.name, message: error.message })
                }
            }
        })


        server.listen(PORT, () => console.log(`API started on port ${PORT}`))
    })
    .catch(error => console.error(error))