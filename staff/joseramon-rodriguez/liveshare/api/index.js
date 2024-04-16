import mongoose from "mongoose"
import express from 'express'
import logic from './logic/index.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('DB connected')

        function retrievePost(userId, postId, callback) {
            //TODO field validations
            users.findOne({ _id: new ObjectId(userId) })
                .then(user => {
                    if (!user) {
                        callback(new Error('user not found->cant retrieve post'))

                        return
                    }

                    posts.findOne({ _id: new ObjectId(postId) })
                        .then(post => {
                            if (!post) {
                                callback(new Error('post not found->cant retrieve post'))

                                return
                            }
                            users.findOne({ _id: new ObjectId(post.author) }, { projection: { username: 1 } })
                                .then(postAuthor => {
                                    if (!postAuthor) {
                                        callback(new Error('author not found'))

                                        return
                                    }
                                    const author = {
                                        id: post.author.toString(),
                                        username: postAuthor.username
                                    }

                                    post.id = post._id.toString()
                                    post.author = author

                                    delete post._id

                                    callback(null, post)
                                })
                                .catch(error => callback(error))

                        })
                        .catch(error => callback(error))
                })
                .catch(error => callback(error))
        }

        // function retrievePostsFromUser(userId, targetUserId, callback) {
        //     //TODO field validations
        // }

        const server = express()

        server.get('/', (req, res) => res.json({ hello: 'client' }))

        server.get('/users/:userId', (req, res) => {
            const userId = req.params.userId

            try {
                retrieveUser(userId)
                    .then((user) => res.status(200).json(user).send())
                    .catch(error => res.status(500).json({
                        error: error.constructor.name, message: error.message
                    }))

            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        const jsonBodyParser = express.json()

        server.post('/users', jsonBodyParser, (req, res) => {
            const { name, birthdate, email, username, password } = req.body
            try {
                registerUser(name, birthdate, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json({
                        error: error.constructor.name, message: error.message
                    }))
            } catch (error) {
                res.status(500).json({
                    error: error.constructor.name, message: error.message
                })
            }
        })

        server.post('/login', jsonBodyParser, (req, res) => {
            const user = req.body

            try {
                loginUser(user.username, user.password)
                    .then((id) => res.status(201).json({ message: 'user logged in', userId: id }).send())
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })

            }
        })

        server.get('/posts/', (req, res) => {
            const userId = req.headers.authorization

            retrievePosts(userId, (error, posts) => {
                if (error) {
                    res.status(400).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(200).json(posts)
            })
        })

        server.get('/post/:postId', jsonBodyParser, (req, res) => {
            const userId = req.headers.authorization
            const postId = req.params.postId

            retrievePost(userId, postId, (error, post) => {
                if (error) {
                    res.status(400).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(200).json(post)
            })

        })

        server.listen(8080, () => console.log('API started'))
    })
    .catch(error => console.error(error))