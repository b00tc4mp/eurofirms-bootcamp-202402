import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')


client.connect()
    .then(connection => {
        console.log('connected')
        const db = connection.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

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
            users
                .findOne({ username, password })
                .then((user) => {
                    if (!user) {
                        callback(new Error("no valid credetials"));

                        return;
                    }

                    callback(null, user._id.toString());
                })
                .catch((error) => callback(error));
        }

        loginUser('pepitogrillo', '123123123', (error, userId) => {
            if (error) {
                console.error(error)
                return;
            }

            console.log('user logged in', userId)
        });

        console.log('continue after loginUser call');

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

        retrieveUser('6617a872150da642e7168d91', (error, user) => {
            if (error) {
                console.error(error)

                return
            }
            console.log('USERDATA')
            console.log(user)
        })

        console.log('continue after retrieve user')

        function createPost(author, text, image, callback) {
            // TODO validate fields
            users.findOne({ _id: new ObjectId(author) })
                .then((user) => {
                    if (!user) {
                        callback(new Error('user not found'))

                        return
                    }

                    const date = new Date().toISOString()

                    const post = { author: new ObjectId(author), text, date, image }

                    posts.insertOne(post)
                        .then(() => callback(null))
                        .catch(error => callback(error))
                })
                .catch(error => callback(error))

            // check if author exist
            // if author does not exist, throw an error
            // oterwhise try to create the post
            // then if post is successfully created, call callback without error
            // otherwise call callback with the error
        }

        createPost('6617a872150da642e7168d91', 'Hola soy Pepito', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Z1dDF2Zmk4ZmQxeXFoa3BpN28wa3BwdHoxd2l5eGZpYmEyOGFtcCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/uUP7F5A1rQR9uKls9P/giphy.gif', error => {
            if (error) {
                console.error(error)

                return
            }

            console.log('post created')
        })
    })
    .catch(error => console.error(error))