import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')


client.connect()
    .then(connection => {
        console.log('connected')

        const db = connection.db('test')

        const users = db.collection('users')

        function registerUser(name, birthdate, email, username, password, callback) {
            // TODO input validation

            users.findOne({ $or: [{ email }, { username }] })
                .then(user => {
                    if (user) {
                        callback(new Error('user already exists'))

                        return
                    }

                    // TODO insert user in db

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

        console.log('continue after registerUser call')

        function loginUser(username, password, callback) {
            // TODO
        }

        loginUser('pepitogrillo', '123123123', (error, userId) => {
            if (error) {
                console.error(error)

                return
            }

            console.log('user logged in', userId)
        })

        console.log('continue after loginUser call')
    })
    .catch(error => console.error(error))