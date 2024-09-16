import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')


client.connect()
    .then(connection => {
        console.log('connected')

        const db = connection.db('test')

        const users = db.collection('users')

        // users.insertOne({ name: 'Pepito Grillo', birthdate: '2000-01-01', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })
        //     .then(result => console.log('insert one', result))
        //     .catch(error => console.error(error))

        // users.findOne({ _id: new ObjectId('661564cb1a472d8489c61119') })
        //     .then(user => console.log('find one', user))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('661564cb1a472d8489c61119') }, { $set: { password: '234234234' } })
        //     .then(result => console.log('update one', result))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('661564cb1a472d8489c61119') })
        //     .then(result => console.log('delete one', result))
        //     .catch(error => console.error(error))
    })
    .catch(error => console.error(error))

console.log('...')