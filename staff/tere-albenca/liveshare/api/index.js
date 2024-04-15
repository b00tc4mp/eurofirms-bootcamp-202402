import mongoose from "mongoose";
import express from 'express'

const { Schema, model } = mongoose;

const { Types: { ObjectId } } = Schema

const user = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const post = new Schema({
  author: {
    type: ObjectId,
    requiered: true,
    ref: 'USer'
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  }
})

const User = model('User', user)
const Post = model('Post', post)

mongoose.connect("mongodb://localhost:27017//test")
  .then(() => {
    console.log('DB connected')

    function registerUser(name, lastname, birthdate, email, username, password) {
      return User.findOne({ $or: [{ username }, { email }] })
        .catch(error => { throw new Error(error.message) })
        .then(user => {
          if (user) throw new Error("user already exists");

          user = { name, lastname, birthdate, email, username, password };

          return User.create(user)
        })
        .then(user => { })
    }

    function loginUser(username, password) {
      return User.findOne({ username })
        .then(user => {
          if (!user) throw new Error("no valid credetials");

          if (user.password !== password) throw new Error('error in passwords')

          return user._id.toString();
        })
        .catch(error => { throw new Error(error.message) });
    }

    function retrieveUser(userId) {
      return User.findOne({ _id: new ObjectId(userId) }, { projection: { name: 1, username: 1 } })
        .then(user => {
          if (!user) { throw new Error('user not found') }
          return User
        })
        .catch(error => { throw new Error(error.message) })
    }

    function createPost(author, image, text) {
      return User.findOne({ _id: new ObjectId(author) })
        .then(user => {
          if (!user) { throw new Error('user not found') }
          const date = new Date().toISOString()
          const post = { author: user._id, image, text, date }
          Post.insertOne(post)
            .then(() => ({})
              .catch(error => { throw new Error(error.message) });
        })
        .catch(error => { throw new Error(error.message) });

    }

    function retrievePosts(userId) {
      return User.findOne({ _id: new ObjectId(userId) })
        .then(user => {
          if (!user) { throw new Error('user not found') }

          let postsProcessedCount = 0
          let errorHappened = false

          Post.find().toArray()
            .then(post => {
              Post.forEach(post => {
                User.findOne({ _id: post.author }, { projection: { username: 1 } })
                  .then(user => {
                    if (errorHappened) return

                    if (!user) {
                      callback(new Error('user does not exists'))

                      errorHappened = true

                      return
                    }

                    post.id = post._id.toString()
                    delete post._id

                    const author = {
                      id: post.author.toString(),
                      username: user.username
                    }

                    post.author = author

                    postsProcessedCount++

                    if (postsProcessedCount === posts.length)
                      callback(null, posts)
                  })
                  .catch(error => callback(error))
              })
            })
            .catch(error => console.error(error))
        })
        .catch(error => callback(error))
    }

    function retrievePost(userId, postId) {

      return User.findOne({ _id: new ObjectId(userId) })
        .then(user => {
          if (!user) {
            callback(new Error('this user does not exists'))

            return
          }
          Post.findOne({ _id: new ObjectId(postId) })
            .then(post => {
              if (!post) { throw new Error('post not found') }

              User.findOne({ _id: post.author }, { projection: { username: 1 } })
                .then(user => {
                  if (!user) { throw new Error('users does not exist') }

                  Post.id = post._id.toString()
                  delete post._id

                  const author = {
                    id: post.author.toString(),
                    username: user.username
                  }
                  post.author = author
                  callback(null, post)
                })
                .catch(error => { throw new Error(error.message) })
            })
            .catch(error => { throw new Error(error.message) })
        })
        .catch(error => { throw new Error(error.message) })
    }

    const server = express()

    server.get('/', (req, res) => res.json({ hello: 'client' }))

    server.get('/users/:userId', (req, res) => {
      const userId = req.params.userId

      retrieveUser(userId, (error, user) => {
        if (error) {
          res.status(404).json({ error: error.constructor.name, message: error.message })

          return
        }

        res.json(user)
      })
    })

    const jsonBodyParser = express.json() // JSON.parse(...)

    server.post('/users', jsonBodyParser, (req, res) => {
      const { name, lastname, birthdate, email, username, password } = req.body
      try {
        registerUser(name, lastname, birthdate, email, username, password)
          .then(() => res.status(201).send())
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch (error) {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
    })

    server.post('/login', jsonBodyParser, (req, res) => {
      const { username, password } = req.body

      try {
        loginUser(username, password)
          .then(() => res.status(201).send())
          .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))

      } catch {
        res.status(500).json({ error: error.constructor.name, message: error.message })
      }
      console.log('user logged in', userId)
      res.json({
        error: null,
        data: userId
      })
    })
  })

server.get('/posts', (req, res) => {
  const userId = req.headers.authorization

  retrievePosts(userId, (error, posts) => {
    if (error) {
      res.status(404).json({ error: error.constructor.name, message: error.message })

      return
    }

    res.status(200).json(posts)
  })
})

server.get('/posts/:postId', (req, res) => {
  const userId = req.headers.authorization

  const { postId } = req.params

  retrievePost(userId, postId, (error, post) => {
    if (error) {
      res.status(404).json({ error: error.constructor.name, message: error.message })

      return
    }
    res.status(200).json(post)
  })
})

server.listen(8080, () => console.log('API started'))
  })
  .catch (error => console.error(error));
