import mongodb from "mongodb"
import express from 'express'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient("mongodb://localhost:27017");

client.connect()
    .then(connection => {
        console.log('DB connected')

        const db = connection.db('test')
        const users = db.collection('users')
        const posts = db.collection('posts')


        function registerUser(
            name,
            birthdate,
            email,
            username,
            password,
            callback
        ) {
            users.findOne({ $or: [{ email }, { username }] })
                .then(user => {
                    if (user) {
                        callback(new Error('user already exists'))

                        return
                    }

                    user = { name, birthdate, email, username, password }

                    users.insertOne(user)
                        .then(() => callback(null))
                        .catch(error => callback(error))

                })
                .catch(error => callback(error))
        }

        registerUser('sirenavarada', '1900-01-01', 'sirenavaradaxhotmail', 'sirenavarada', '123123123', error => {
            if (error) {
                console.error(error)

                return
            }
            console.log("user registered")
        })

        console.log("continue after resgisterUser call")

        function loginUser(username, password, callback) {

            users.findOne({ username })
                .then(user => {
                    if (!user) {
                        callback(new Error('user not found'))

                        return
                    }

                    if (user.password !== password) {
                        callback(new Error('wrong credentials'))

                        return
                    }

                    callback(null, user._id.toString())
                })
                .catch(error => callback(error))
        }

        loginUser('gafotas', '124124124', (error, userId) => {
            if (error) {
                console.error(error)

                return
            }
            console.log('user logged in', userId)
        })

        console.log('continue after loginUser call')

        function retrieveUser(userId, callback) {


            users.findOne({ _id: new ObjectId(userId) }, { projection: { _id: 0, birthdate: 0, email: 0, password: 0 } })
                .then(user => {
                    if (!user) {
                        callback(new Error('user not found'))

                        return
                    }

                    // sanitize (not needed if using projection)
                    // delete user._id
                    // delete user.email
                    // delete user.password

                    callback(null, user)
                })
                .catch(error => callback(error))
        }

        retrieveUser('6618bef85bbbcbe9a016c9b6', (error, user) => {
            if (error) {
                console.error(error)

                return
            }

            console.log('user retrieved', user)
        })

        console.log('continue after retrieveUser call')

        function createPost(userId, image, text, callback) {


            users.findOne({ _id: new ObjectId(userId) })
                .then(user => {
                    if (!user) {
                        callback(new Error('user not found'))

                        return
                    }

                    const post = {
                        author: user._id,
                        image,
                        text,
                        date: new Date
                    }

                    posts.insertOne(post)
                        .then(() => callback(null))
                        .catch(error => callback(error))
                })
                .catch(error => callback(error))
        }

        // createPost' xxx', 'https://www.xxxxxxxxxxxxxxxx.png', 'hello xx', error => {
        //      (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('post created')
        // })

        // console.log('continue after createPost call')

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
            const user = req.body

            registerUser(user.name, user.birthdate, user.email, user.username, user.password, error => {
                if (error) {
                    res.status(404).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(201).send()
            })
        })

        server.listen(8080, () => console.log('API started'))
    })
    .catch(error => console.error(error))



