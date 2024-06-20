import mongoose from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['seller', 'buyer'],
        default: 'buyer'
    },
    saved: {
        type: [{ type: ObjectId, ref: 'Product' }]
    }


})

const product = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    images: {
        type: [{ type: String }],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    state: {
        type: String,
        enum: ['used', 'new'],
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    date: {
        type: Date,
        required: true
    },
    likes: {
        type: [{ type: ObjectId, ref: 'User' }],
    }
})

const message = new Schema({
    from: {
        type: ObjectId,
        ref: 'User1'
    },
    to: {
        type: ObjectId,
        ref: 'User2'
    },
    text: {
        type: String,
        required: true
    }
})


const chat = new Schema({
    userFrom: {
        type: ObjectId,
        ref: 'User1'
    },
    userTo: {
        type: ObjectId,
        ref: 'User2'
    },
    messages: [{ type: String }],
    date: {
        type: Date
    }
})



const User = model('User', user)
const Product = model('Product', product)

export {
    User,
    Product
}