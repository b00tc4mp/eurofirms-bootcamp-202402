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
    email: {
        type: String,
        required: true
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
        console.log('DB connected')

        function registerUser(name, birthdate, email, username, password) {
            //TODO input validation

            return User.findOne({ $or: [{ email }, { username }] })
                .catch(error => { throw new Error(error.message) })
                .then(user => {
                    if (user) throw new Error('user already exists')

                    //insert user in db

                    user = { name, birthdate, email, username, password }

                    return User.create(user)
                })
                .then(user => { })
        }

        // registerUser('James hook', '2000-01-01', 'jaames@hook.com', 'james hook', '123123123', error => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user registered')
        // })

        // console.log('continue afted registerUser call')

        function loginUser(username, password, callback) {
            users.findOne({ username })
                .then(user => {
                    if (!user || user.password !== password) {
                        callback(new Error('wrong credential->cant log in'))
                        return
                    }
                    callback(null, user._id.toString())
                })
                .catch(error => callback(error))

        }

        // loginUser('pepitogrillo', '123123123', (error, userId) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user logged in', userId)
        // })

        // //wrong password for testing purposes
        // loginUser('pepitogrillo', 'wrong password', (error, userId) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user logged in', userId)
        // })

        // console.log('continue afted loginUser call')

        function retrieveUser(userId, callback) {
            users.findOne({ _id: new ObjectId(userId) }, { projection: { _id: 0, name: 1, username: 1 } })
                .then((user) => {
                    if (!user) {
                        callback(new Error('user not found->cant retrieve user data'))

                        return
                    }

                    // delete user._id
                    // delete user.password

                    callback(null, user)
                })
        }

        // retrieveUser('6617d38e7197d5c4d62dc42d', (error, user) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user data')
        //     console.log(user)
        // })

        // //wrong user for testing purposes
        // retrieveUser('661548ef8055b24b7816c9b0', (error, user) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user data')
        //     console.log(user)
        // })

        // console.log('continue after retrieve user')

        // function createPost(author, text, image, callback) {
        //     users.findOne({ _id: new ObjectId(author) })
        //         .then((user) => {
        //             if (!user) {
        //                 callback(new Error('user not found -> cant create post'))

        //                 return
        //             }

        //             const date = new Date().toISOString()

        //             const post = { author: user._id, text, image, date }
        //             posts.insertOne(post)
        //                 .then(callback(null))
        //                 .catch(error => callback(error))
        //         })
        //         .catch(error => console.error(error))
        // }

        // createPost('6618e52487b26d25edc1b3f0', 'sample text', 'https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif?cid=790b76113roikb8rwwklig1lt8758bqsvg39c094rhipguli&ep=v1_gifs_trending&rid=giphy.gif&ct=g', error => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('post created')

        // })
        // //wrong author for testing purposes
        // createPost('661548ef8055b24b7816c9b0', 'sample text', 'https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif?cid=790b76113roikb8rwwklig1lt8758bqsvg39c094rhipguli&ep=v1_gifs_trending&rid=giphy.gif&ct=g', error => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('post created')

        // })

        function retrievePosts(userId, callback) {
            //TODO input validations

            users.findOne({ _id: new ObjectId(userId) })
                .then(user => {
                    if (!user) {
                        callback(new Error('user not found'))

                        return
                    }

                    let errorHappened = false
                    let postsProcessedCount = 0

                    posts.find().toArray()
                        .then(posts => {
                            posts.forEach((post, index) => {
                                users.findOne({ _id: post.author }, { projection: { username: 1 } })
                                    .then(user => {
                                        if (errorHappened) return

                                        if (!user) {
                                            callback(new Error('owner user not found'))

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
                        .catch(error => callback(error))
                })
                .catch(error => callback(error))
        }

        // retrievePosts('6617d38e7197d5c4d62dc42d', (error, posts) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('retrieved posts', posts)
        // })

        // console.log('continue after retrievePosts call')

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

        // retrievePost('6617d38e7197d5c4d62dc42d', '6618e52487b26d25edc1b3f1', (error, post) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('post retrieved', post)
        // })
        // function retrievePostsFromUser(userId, targetUserId, callback) {
        //     //TODO field validations
        // }

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

            loginUser(user.username, user.password, (error, userId) => {
                if (error) {
                    res.status(400).json({ error: error.constructor.name, message: error.message })

                    return
                }
                console.log('user logged in', userId)
                res.status(200).json({
                    error: null,
                    data: userId
                })
            })
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