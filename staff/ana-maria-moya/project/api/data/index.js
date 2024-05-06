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
    tittle: {
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

const User = model('User', user)
const Post = model('Post', post)
const Comment = model('Comment', comment)

export {
    User,
    Post,
    Comment
}