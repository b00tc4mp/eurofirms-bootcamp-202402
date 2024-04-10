import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')

        function registerUser(name, birthdate, email, username, password, callback) {
            //TODO input validation

            users.findOne({ $or: [{ email }, { username }] })
                .then(user => {
                    if (user) {
                        callback(new Error('user already exists'))

                        return
                    }

                    //TODO insert user in db

                    user = { name, birthdate, email, username, password }

                    users.insertOne(user)
                        .then(() => callback(null))
                        .catch(error => callback(error))

                })
                .catch(error => callback(error))
        }

        registerUser('Pepito Grillo', '2000-01-01', 'pepito@grillo.com', 'pepitogrillo', '123123123', error => {
            if (error) {
                console.error(error)

                return
            }

            console.log('user registered')
        })

        console.log('continue afted registerUser call')

        function loginUser(username, password, callback) {
            users.findOne({ username, password })
                .then(user => {
                    if (!user) {
                        callback(new Error('wrong credential'))
                        return
                    }
                    callback(null, user._id.toString())
                })
                .catch(error => callback(error))

        }

        loginUser('pepitogrillo', '234234234', (error, userId) => {
            if (error) {
                console.error(error)

                return
            }

            console.log('user logged in', userId)
        })

        console.log('continue afted loginUser call')

        function retrieveUser(userId, callback) {
            users.findOne({ _id: new ObjectId(userId) })
                .then((user) => {
                    if (!user) {
                        callback(new Error('user not found'))

                        return
                    }

                    delete user._id
                    delete user.password

                    callback(null, user)
                })
        }

        retrieveUser('661548ef8055b24b7816c9b7', (error, user) => {
            if (error) {
                console.error(error)

                return
            }

            console.log('user data')
            console.log(user)
        })

        console.log('continue after retrieve user')
    })
    .catch(error => console.error(error))