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
    }
})

const product = new Schema({
    user: {
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
        required: true
    },
    state: {
        enum: ['used', 'new'],
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    likes: {
        type: [{ type: ObjectId, ref: 'User' }],
    }
})

const User = model('User', user)
const Product = model('Product', product)

export {
    User,
    Product
}