import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')


client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')

        console.log('hola')


    })
    .catch(error => console.error(error))