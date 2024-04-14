import mongodb from 'mongodb'
import express from 'express'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')

        users.insertOne({ name: 'Wendy', birthdate: '2001-04-15', email: 'wendy@gmail.com', username: 'wndy2', password: '552+2+552' })
            .then(result => console.log(result))
            .catch(error => console.error(error))

        const server = express()

        const jsonBodyParser = express.json()

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

        server.post('/login', jsonBodyParser, (req, res) => {
            const user = req.body

            loginUser(user.username, user.password, (error, userId) => {
                if (error) {
                    res.status(400).json({ error: error.constructor.name, message: error.message })

                    return
                }

                console.log('user logged in', userId)
                res.json({ error: null, data: userId })
            })
        })

        server.listen(8080, () => console.log('Api started'))

    })


// function registerUser(name, birthdate, email, username, password, callback) {
//     users.findOne({ $or: [{ email }, { username }] })
//         .then(user => {
//             if (user) {
//                 callback(new Error('user already exits'))
//                 return
//             }
//             user = { name, birthdate, email, username, password }

//             users.insertOne(user)
//                 .then(() => callback(null))
//                 .catch(error => callback(error))
//         })
//         .catch(error => callback(error))
// }

// registerUser('Pepito Grillo', '2000-01-01', 'pepito@grillo.com', 'pepitogrillo', '123123123', error => {
//     if (error) {
//         console.error(error)

//         return
//     }

//     console.log('user registered')
// })
// // ----------------------------------------------------------------------------------------------------------------
// function loginUser(username, password, callback) {
//     users.findOne({ username, password })
//         .then((user) => {
//             if (!user) {
//                 callback(new Error('no valid credentials'))


//                 return;
//             }
//             callback(null, user._id.toString());
//         })
//         .catch((error) => console.error(error))
// }


// // ---------------------------------------------------------------------------------------------------------------------
// function retrieveUser(userId, callback) {
//     users.findOne({ _id: new ObjectId(userId) })
//         .then((user) => {
//             if (!user) {
//                 callback(new Error('user not found'))

//                 return
//             }
//             delete user._id
//             delete user.password
//             delete user.email

//             callback(null, user)
//         })
// }



// // --------------------------------------------------------------------------------------------------------------------------

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
//                                 if (errorHappened) {
//                                     return
//                                 }

//                                 if (!user) {
//                                     callback(new Error('owner user not found'))

//                                     errorHappened = true

//                                     return
//                                 }

//                                 post.id = post._id.toString()

//                                 delete post.id

//                                 const author = {
//                                     id: post.author.toString(),
//                                     username: user.username
//                                 }

//                                 post.author = author

//                                 postsProcessedCount++

//                                 if (postsProcessedCount === posts.length) {
//                                     callback(null, posts)
//                                 }


//                             })
//                             .catch(error => callback(error))
//                     })
//                 })
//                 .catch(error => callback(error))
//         })
//         .catch(error => callback(error))
// }

// // ----------------------------------------------------------------------------------------------------------------------------

