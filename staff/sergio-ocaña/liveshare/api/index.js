import mongoose from 'mongoose'
import express from 'express'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

const user = new Schema({
    name: {
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
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const User = model('User', user)
const Post = model('Post', post)

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('DB conected')

        function registerUser(name, birthdate, email, username, password, callback) {
            return User.findOne({ $or: [{ username }, { email }] })
                .catch(error => { throw new Error(error.message) })
                .then((user) => {
                    if (user) throw new Error("user already exists")

                    user = { name, birthdate, email, username, password }

                    return User.create(user)
                })
                .then(user => { })
        }
        // try {
        //     registerUser("Juan Perez", "2000-01-01", "juanperez@gmail.com", "lperez", "12341234")
        //         .then(() => console.log('user registered'))
        //         .catch(error => console.error(error))

        // } catch (error) {
        //     console.error(error)
        // }

        // function loginUser(username, password, callback) {
        //     users.findOne({ username })
        //         .then(user => {
        //             if (!user || user.password !== password) {
        //                 callback(new Error('wrong credential'))
        //                 return
        //             }
        //             callback(null, user._id.toString())
        //         })
        //         .catch(error => callback(error))
        // }

        // function retrieveUser(userId, callback) {
        //     users.findOne({ _id: new ObjectId(userId) }, { projection: { _id: 0, birthdate: 0, email: 0, password: 0 } })
        //         .then((user) => {
        //             if (!user) {
        //                 callback(new Error('user not found'))

        //                 return
        //             }

        //             callback(null, user)
        //         })
        // }

        // retrieveUser('661921ccda5eee762a343a6a', (error, user) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }
        //     console.log('USERDATA')
        //     console.log(user)
        // })

        // console.log('continue after retrieve user')

        // function createPost(userId, image, text, callback) {
        //     users.findOne({ _id: new ObjectId(userId) })
        //         .then(user => {
        //             if (!user) {
        //                 callback(new Error('user not found'))

        //                 return
        //             }

        //             const post = {
        //                 author: user._id,
        //                 image,
        //                 text,
        //                 date: new Date
        //             }
        //             posts.insertOne(post)
        //                 .then(() => callback(null))
        //                 .catch(error => callback(error))
        //         })
        //         .catch(error => callback(error))
        // }
        // createPost('661921ccda5eee762a343a6a', 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png', "hello hello", error => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('post created')
        // })

        // function retrievePosts(userId, callback) {
        //     users.findOne({ _id: new ObjectId(userId) })
        //         .then(user => {
        //             if (!user) {
        //                 callback(new Error('user not found'))

        //                 return
        //             }
        //             let errorHappened = false
        //             let postsProcessedCount = 0

        //             posts.find({}).toArray()
        //                 .then(posts => {
        //                     posts.forEach(post => {
        //                         users.findOne({ _id: post.author }, { projection: { username: 1 } })
        //                             .then(user => {
        //                                 if (errorHappened) return

        //                                 if (!user) {
        //                                     callback(new Error('owner user not found'))

        //                                     errorHappened = true

        //                                     return
        //                                 }

        //                                 post.id = post._id.toString()
        //                                 delete post._id

        //                                 const author = {
        //                                     id: post.author.toString(),
        //                                     username: user.username
        //                                 }

        //                                 post.author = author

        //                                 postsProcessedCount++

        //                                 if (postsProcessedCount === posts.length)
        //                                     callback(null, posts)
        //                             })
        //                             .catch(error => callback(error))
        //                     })
        //                 })
        //                 .catch(error => callback(error))
        //         })
        //         .catch(error => callback(error))
        // }
        // retrievePosts('661921ccda5eee762a343a6a', (error, posts) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('retrieve posts', posts)
        // })
        const server = express()

        // server.get('/', (req, res) => res.json({ hello: 'client' }))

        // server.get('/users/:userId', (req, res) => {
        //     const userId = req.params.userId

        //     retrieveUser(userId, (error, user) => {
        //         if (error) {
        //             res.status(404).json({ error: error.constructor.name, message: error.message })

        //             return
        //         }
        //         res.json(user)
        //     })
        // })

        const jsonBodyParser = express.json()

        server.post('/users', jsonBodyParser, (req, res) => {
            const { name, birthdate, email, username, password } = req.body

            try {
                registerUser(name, birthdate, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        // server.post('/login', jsonBodyParser, (req, res) => {
        //     const user = req.body

        //     loginUser(user.username, user.password, (error, userId) => {
        //         if (error) {
        //             res.status(400).json({ error: error.construtor.name, message: error.message })

        //             return
        //         }
        //         console.log('user logged in', userId)
        //         res.json({
        //             error: null,
        //             data: userId
        //         })
        //     })
        // })
        // server.get('/posts', (req, res) => {
        //     const userId = req.headers.authorization

        //     retrievePosts(userId, (error, posts) => {
        //         if (error) {
        //             res.status(404).json({ error: error.constructor.name, message: error.message })

        //             return
        //         }

        //         res.status(200).json(posts)
        //     })
        // })
        server.listen(8080, () => console.log('API started'))
    })
    .catch(error => console.error(error))