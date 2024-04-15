import mongodb from 'mongoose'
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
    },
})

const post = new Schema({
    author: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },

})

const User = model('User', user)
const Post = model('Post', post)

mongoose.connect('mongodb://localhost:21017/test')
client.connect()
    .then(() => {
        console.log('DB Conected')

        function registerUser(name, birthdate, email, username, password) {
            return User.findOne({ $or: [{ email }, { username }] })
                .catch(error => { throw new Error(error.message) })
                .then(user => {
                    if (user) throw new Error('user already exists')

                    user = { name, birthdate, email, username, password }

                    return User.create(user)
                })
            then(user => { })
        }

        try {
            registerUser('Pepito Grillo', '2000-01-01', 'pepito@grillo', 'pepitogrillo', '123123123')
            then(() => console.log('user registered'))
                .catch(error => console.log(error))

        } catch (error) {
            console.error(error)
        }

        // console.log('continue after registerUser call')

        function loginUser(username, password, callback) {
            users.findOne({ username })
                .then(user => {
                    if (!user || user.password !== password) {
                        callback(new Error('wrong credential  (-> cant log in)'))
                        return
                    }
                    callback(null, user._id.toString())
                })
                .catch(error => callback(error))

        }


        // loginUser('pepitogrillo', '123123123123', (error, userId) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user logged in', userId)
        // })

        // console.log('continue after loginUser call')

        function retrieveUser(userId, callback) {
            users.findOne({ _id: new ObjectId(userId) })
                .then((user) => {
                    if (!user) {
                        callback(new Error('user not found'))

                        return
                    }
                    delete user._id
                    delete user.email
                    delete user.password

                    callback(null, user)
                })
        }

        // retrieveUser('661796c9fed8742582db7421', (error, user) => {
        //     if (error) {
        //         console.log(error)
        //         return
        //     }
        //     console.log('USERDATA')
        //     console.log(user)
        // })

        // console.log('continue after revieve user')

        // function createPost(author, image, text, callback) {
        //     users.findOne({ _id: ObjectId(author) })
        //         .then((user) => {
        //             if (!user) {
        //                 callback(new Error('user not found'))
        //                 return
        //             }
        //             const date = new Date().toISOString()
        //             const post = { author: new ObjectId(author), text, date: new date, image }
        //             posts.insertOne(post)
        //                 .then(() => callback(null))
        //                 .catch(error => callback(error))
        //         })
        //         .catch(error => callback(error))

        // }

        // createPost('661796c9fed8742582db7421', 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hicWMxcDBjbzN0c3JuM293djEzOG1qdWE0Z2g4a3gzM3B4Nm9mciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6Zt7xWCLZD8f5ZsY/200.webp', 'Hola soy Pepito', (error) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }
        //     console.log('Post Created Successfully')
        // })

        // function retrievePosts(userId, callback) {
        //     // TODO INPUT VALIDATION

        //     users.findOne({ _id: new ObjectId(userId) })
        //         .then(user => {
        //             if (!user) {
        //                 callback(new Error('user not found'))

        //                 return
        //             }

        //             let errorHappened = false
        //             let postsProcessedCount = 0

        //             posts.find({}), toArray()
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
        //                     });
        //                 })
        //                 .catch(error => callback(error))
        //         })
        //         .catch(error => callback(error))
        // }
        // retrievePosts('66179593e8379fb055788f69', (error, posts) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }
        //     console.log('retrieved posts', posts)
        // })
        // console.log('continue after retrievePosts call')

        // function retrievePost(userId, postId, callback) {

        //     //DEMOMENTO NO NECESITAMOS LA VALIDACION

        //     //BUSCAMOS EL USUARIO EN LA BASE DE DATOS 
        //     users.findOne({ _id: new ObjectId(userId) })
        //         .then(user => {
        //             // SI NO LO ENCUENTRA QUE NOS DEVUELVA DIRECTAMENTE EL ERROR
        //             callback(new Error('user not found'))

        //             return
        //         })

        //     posts.findOne({ _id: new ObjectId(postId), author: new ObjectId(userId) })
        //         .then(post => {
        //             // SI NO LO ENCUENTRA QUE NOS DEVUELVA DIRECTAMENTE EL ERROR
        //             if (!post) {
        //                 callback(new Error('post not found'))

        //                 return
        //             }
        //             //NO PODEMOS TRABAJAR CON LA INFORMACION QUE NOS DA POR ESO LO PASAMOS A UNA CADENA Y ELIMINAMOS
        //             post.id = post._id.toString()
        //             delete post._id

        //             callback(null, post)
        //         })
        //         .catch(error => callback(error))
        // }

        // retrievePost('661796c9fed8742582db7421', (error, post) => {
        //     if (condition) {


        //         return
        //     }
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
        const jsonBodyParser = express.json() //JSON.PARSE(...)

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

        server.post('/users', jsonBodyParser, (req, res) => {
            const user = req.body
            registerUser(user.name, user.birthdate, user.email, user.username, user.password, error => {
                if (error) {
                    res.status(404).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(201).send()
            })
        })
        server.listen(8080, () => console.log('API STARTED RUNNING'))


        server.get('/posts', (req, res) => {
            const userId = req.headers.authorization

            retrievePosts(userId, (error, posts) => {
                if (error) {

                    res.status(404).json({ error: error.constructor.name, message: error.message })

                    return
                }
                res.json
            })
        })

        server.get('/posts/:postId', (req, res) => {
            const userId = req.headers.authorization

            retrievePosts(userId, (error, posts) => {
                if (error) {

                    res.status(404).json({ error: error.constructor.name, message: error.message })

                    return
                }
                res.json
            })
        })

        server.post('/login', jsonBodyParser, (req, res) => {
            const user = req.body

            loginUser(user.username, user.password, (error, userId) => {
                if (error) {
                    console.log(error)
                    res.status(404).json({ error: error.constructor.name, message: error.message })

                    return
                }
                res.json(user)
            })
        })

        server.get('/posts/:userId,', (req, res) => {
            const userId = req.headers.authorization

            retrievePosts(userId, (error, posts) => {
                if (error) {
                    res.status(404).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.json(posts)
            })
        })
    })
    .catch(error => console.error(error))