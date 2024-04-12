import mongodb from "mongodb"

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient("mongodb://localhost:27017");

client.connect()
    .then(connection) => {
    console.log('connected')

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

    function retrievePosts(userId, callback) {


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

    retrievePosts('xxxx', (error, posts) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('retrieved posts', posts)
    })

    console.log('continue after retrievePosts call')
})
    .catch (error => console.error(error))