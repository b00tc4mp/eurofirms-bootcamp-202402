import mongodb from 'mongodb'
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
        requiered: true
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
        console.log('DB connected')

        function registerUser(name, birthdate, email, username, password) {
            // TODO input validation

            return User.findOne({ $or: [{ email }, { username }] })
                .catch(error => { throw new Error(error.message) })
                .then(user => {
                    if (user) throw new Error('user already exists')

                    user = { name, birthdate, email, username, password }

                    return User.create(user)

                })
                .then(user => { })
        }
        // try {
        //     registerUser('Pepito Grillo', '2000-01-01', 'pepito@grillo.com', 'pepitogrillo', '123123123')
        //         .then(() => console.log('user registered'))
        //         .catch(error => console.error(error))
        // } catch (error) {
        //     console.error(error)
        // }

        // console.log('continue after registerUser call')

        // function loginUser(username, password, callback) {
        //     users
        //         .findOne({ username, password })
        //         .then((user) => {
        //             if (!user) {
        //                 callback(new Error("no valid credetials"));

        //                 return;
        //             }

        //             callback(null, user._id.toString());
        //         })
        //         .catch((error) => callback(error));
        // }

        // loginUser('pepitogrillo', '123123123', (error, userId) => {
        //     if (error) {
        //         console.error(error)
        //         return;
        //     }

        //     console.log('user logged in', userId)
        // });

        // console.log('continue after loginUser call');

        // function retrieveUser(userId, callback) {
        //TODO input validation
        // users.findOne({ _id: new ObjectId(userId) })
        //     .then((user) => {
        //         if (!user) {
        //             callback(new Error('user not found'))

        //             return
        //         }

        //sanitaze (not needed if using projection)
        // delete user._id
        //delete user.email
        // delete user.password

        //     callback(null, user)
        // })
        // .catch(error => callback(error))
        // }

        //     retrieveUser('6617a872150da642e7168d91', (error, user) => {
        //         if (error) {
        //             console.error(error)

        //             return
        //         }
        //         console.log('USERDATA')
        //         console.log(user)
        //     })

        //     console.log('continue after retrieve user')

        //     function createPost(author, text, image, callback) {
        //         // TODO validate fields
        //         users.findOne({ _id: new ObjectId(author) })
        //             .then((user) => {
        //                 if (!user) {
        //                     callback(new Error('user not found'))

        //                     return
        //                 }

        //                 const date = new Date().toISOString()

        //                 const post = { author: new ObjectId(author), text, date, image }

        //                 posts.insertOne(post)
        //                     .then(() => callback(null))
        //                     .catch(error => callback(error))
        //             })
        //             .catch(error => callback(error))

        //         // check if author exist
        //         // if author does not exist, throw an error
        //         // oterwhise try to create the post
        //         // then if post is successfully created, call callback without error
        //         // otherwise call callback with the error
        //     }

        //     createPost('6617a872150da642e7168d91', 'Hola soy Pepito', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Z1dDF2Zmk4ZmQxeXFoa3BpN28wa3BwdHoxd2l5eGZpYmEyOGFtcCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/uUP7F5A1rQR9uKls9P/giphy.gif', error => {
        //         if (error) {
        //             console.error(error)

        //             return
        //         }

        //         console.log('post created')
        //     })
        // })
        // .catch(error => console.error(error))
        // function retrievePosts(userId, callback) {
        //     // TODO input validations

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

        // retrievePosts('6617c3ad89de5e9374288e40', (error, posts) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('retrieved posts', posts)
        // })

        // console.log('continue after retrievePosts call')
        // })

        //SERVER

        const server = express()

        // server.get('/', (req, res) => res.json({ hello: 'client' }))

        // server.get('/users/:userId', (req, res) => {
        //     const userId = req.params.userId
        // retrieveUser(userId, (error, user) => {
        //     if (error) {
        //         res.status(404).json({ error: error.constructor.name, message: error.message })

        //         return
        //     }

        //         res.json(user)
        //     })
        // })

        const jsonBodyParser = express.json() // JSON.parse(...)

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

        server.listen(8080, () => console.log('API started'))

    })
    .catch(error => console.error(error))