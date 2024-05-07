import mongoose from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

const user = new Schema({
    name: {
        type: String,
        required: true,
    },

    surname: {
        type: String,
        required: true,
    },

    email: {
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
        enum: ['student', 'teacher'],
        default: 'student'
        //student = 1 | teacher= 0
    }
})

const work = new Schema({
    student: {
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
        required: true,
    },

    description: {
        type: String
    },

    date: {
        type: Date,
        required: true
    }
})

const porpuse = new Schema({
    teacher: {
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
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    url: {
        type: String
    },

    date: {
        type: Date,
        required: true
    }
})

const comment = new Schema({
    teacher: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    work: {
        type: ObjectId,
        required: true,
        ref: 'Work'
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
const Work = model('Work', work)
const Porpuse = model('Porpuse', porpuse)
const Comment = model('Comment', comment)

export {
    User,
    Work,
    Porpuse,
    Comment
}