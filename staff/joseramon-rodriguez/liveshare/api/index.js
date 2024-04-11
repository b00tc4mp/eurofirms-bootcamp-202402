import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // function registerUser(name, birthdate, email, username, password, callback) {
        //     //TODO input validation

        //     users.findOne({ $or: [{ email }, { username }] })
        //         .then(user => {
        //             if (user) {
        //                 callback(new Error('user already exists -> cant register a new user'))

        //                 return
        //             }

        //             //insert user in db

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

        // console.log('continue afted registerUser call')

        // function loginUser(username, password, callback) {
        //     users.findOne({ username })
        //         .then(user => {
        //             if (!user || user.password !== password) {
        //                 callback(new Error('wrong credential->cant log in'))
        //                 return
        //             }
        //             callback(null, user._id.toString())
        //         })
        //         .catch(error => callback(error))

        // }

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

        // function retrieveUser(userId, callback) {
        //     users.findOne({ _id: new ObjectId(userId) }, { projection: { name: 1, username: 1 } })
        //         .then((user) => {
        //             if (!user) {
        //                 callback(new Error('user not found->cant retrieve user data'))

        //                 return
        //             }

        //             // delete user._id
        //             // delete user.password

        //             callback(null, user)
        //         })
        // }

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

        // createPost('6617d38e7197d5c4d62dc42d', 'sample text', 'https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif?cid=790b76113roikb8rwwklig1lt8758bqsvg39c094rhipguli&ep=v1_gifs_trending&rid=giphy.gif&ct=g', error => {
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

                    posts.find({}).toArray()
                        .then(posts => {
                            posts.forEach(post => {
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

        retrievePosts('6617d38e7197d5c4d62dc42d', (error, posts) => {
            if (error) {
                console.error(error)

                return
            }

            console.log('retrieved posts', posts)
        })

        console.log('continue after retrievePosts call')
    })
    .catch(error => console.error(error))