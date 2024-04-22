import mongoose from "mongoose";
import express from 'express'
import logic from './logic/index.js'
import cors from 'cors'

mongoose.connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log('DB connected')

    const server = express()

    // server.get('/', (req, res) => res.json({ hello: 'client' }))

    const jsonBodyParser = express.json() // JSON.parse(...)
    // const cors = (req, res, next) => {
    //   res.setHeader('Access-Control-Allow-Origin', '*')
    //   res.setHeader('Access-Control-Allow-Headers', '*')
    //   res.setHeader('Access-Control-Allow-Methods', '*')

    //   next()
    // }
    // server.use(cors)
    server.use(cors())

    //registerUSer
    server.post('/users', jsonBodyParser, (req, res) => {

      try {
        const { name, lastname, birthdate, email, username, password } = req.body

        logic.registerUser(name, lastname, birthdate, email, username, password)
          .then(() => res.status(201).send())
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch (error) {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })

    //authenticateUser

    server.post('/users/auth', jsonBodyParser, (req, res) => {
      try {
        const { username, password } = req.body

        logic.authenticateUser(username, password)
          .then(userId => res.status(200).json(userId))
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch (error) {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })

    //retrieveUSer

    server.get('/users/:targetUserId', (req, res) => {
      try {
        const { authorization } = req.headers

        const userId = authorization.slice(7)

        const { targetUserId } = req.params

        logic.retrieveUser(userId, targetUserId)
          .then((user) => res.status(200).json(user))
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })

    //createPost

    server.post('/posts', jsonBodyParser, (req, res) => {
      try {
        const { authorization } = req.headers

        const userId = authorization.slice(7)

        const { image, text } = req.body

        logic.createPost(userId, image, text)
          .then(() => res.status(201).send())
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch (error) {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })

    //retrievePosts

    server.get('/posts', (req, res) => {
      try {
        const { authorization } = req.headers

        const userId = authorization.slice(7)

        logic.retrievePosts(userId)
          .then(posts => res.status(200).json(posts))
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch (error) {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })

    //deletePost

    server.delete('/posts/:postId', (req, res) => {
      try {
        const { authorization } = req.headers

        const userId = authorization.slice(7)

        const { postId } = req.params

        logic.deletePost(userId, postId)
          .then(post => res.status(204))
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch (error) {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })

    //updatePost
    server.patch('/posts/:postId', jsonBodyParser, (req, res) => {
      try {
        const { authorization } = req.headers

        const userId = authorization.slice(7)

        const { postId } = req.params

        const { text } = req.body

        logic.updatePost(userId, postId, text)
          .then(() => res.status(200).send())
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
      } catch (error) {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })


    server.listen(8080, () => console.log('API started'))
  })
  .catch(error => console.error(error));
