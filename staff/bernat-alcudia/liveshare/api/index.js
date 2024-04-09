import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')

        users.insertOne({ name: 'Wendy', birthdate: '2001-04-15', email: 'wendy@gmail.com', username: 'wndy2', password: '552+2+552' })
            .then(result => console.log(result))
            .catch(error => console.error(error))
    })