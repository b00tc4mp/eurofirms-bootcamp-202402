import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongo://localhost:27017')

client.connect()
    .then(connection => {

        const db = connection.db('test')

        const users = db.collection('users')

    })
    .catch(error => console.error(error))