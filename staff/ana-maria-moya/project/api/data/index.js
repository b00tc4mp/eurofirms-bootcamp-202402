import mongoose from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['regular', 'admin'],
        default: 'regular'
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    likes: {
        type: [{ type: ObjectId, ref: 'User' }]
    }
})

const comment = new Schema({
    post: {
        type: ObjectId,
        required: true,
        ref: 'Post',
    },
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }

})

const product = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,

    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

const item = new Schema({
    product: product,
    quantity: {
        type: Number,
        default: 1,
        required: true
    }
})

const cart = new Schema({
    items: [item]
})

const order = new Schema({
    buyer: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    cart: cart,
    date: {
        type: Date,
        required: true
    }
})

const User = model('User', user)
const Post = model('Post', post)
const Comment = model('Comment', comment)
const Product = model('Product', product)
const Item = model('Item', item)
const Cart = model('Cart', cart)
const Order = model('Order', order)

export {
    User,
    Post,
    Comment,
    Product,
    Order,
    Cart,
    Item
}