import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')


client.connect()
    .then(connection => {
        console.log('connected')

        const db = connection.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // function registerUser(name, birthdate, email, username, password, callback) {
        //     // TODO input validation

        //     users.findOne({ $or: [{ email }, { username }] })
        //         .then(user => {
        //             if (user) {
        //                 callback(new Error('user already exists'))

        //                 return
        //             }

        //             // TODO insert user in db

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

        // console.log('continue after registerUser call')

        // function loginUser(username, password, callback) {
        //     // TODO input validation

        //     users.findOne({ username })
        //         .then(user => {
        //             if (!user) {
        //                 callback(new Error('user not found'))

        //                 return
        //             }

        //             if (user.password !== password) {
        //                 callback(new Error('wrong credentials'))

        //                 return
        //             }

        //             callback(null, user._id.toString())
        //         })
        //         .catch(error => callback(error))
        // }

        // loginUser('pepephone', '123qwe123', (error, userId) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user logged in', userId)
        // })

        // console.log('continue after loginUser call')

        // function retrieveUser(userId, callback) {
        //     // TODO input validation

        //     users.findOne({ _id: new ObjectId(userId) }, { projection: { _id: 0, birthdate: 0, email: 0, password: 0 } })
        //         .then(user => {
        //             if (!user) {
        //                 callback(new Error('user not found'))

        //                 return
        //             }

        //             // sanitize (not needed if using projection)
        //             // delete user._id
        //             // delete user.email
        //             // delete user.password

        //             callback(null, user)
        //         })
        //         .catch(error => callback(error))
        // }

        // retrieveUser('6617c3ad89de5e9374288e40', (error, user) => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('user retrieved', user)
        // })

        // console.log('continue after retrieveUser call')

        // function createPost(userId, image, text, callback) {
        //     // TODO input validation

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

        // createPost('6617c3ad89de5e9374288e40', 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png', 'hello mern', error => {
        //     if (error) {
        //         console.error(error)

        //         return
        //     }

        //     console.log('post created')
        // })

        // console.log('continue after createPost call')
    })
    .catch(error => console.error(error))