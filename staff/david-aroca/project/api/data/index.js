import mongoose from "mongoose";

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
        enum: ['trainee', 'trainer'],
        default: 'trainee'

    },
    following: {
        type: String,
    }
})

const exercise = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    video: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    }
})

const diet = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


const measurement = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    weight: {
        type: Number,
        required: true,
    },
    torso: {
        type: Number,
        required: true,
    },
    legs: {
        type: Number,
        required: true
    },
})

const User = model('User', user)
const Exercise = model('Exercise', exercise)
const Diet = model('Diet', diet)
const Measurement = model('Measurement', measurement)

export {
    User,
    Exercise,
    Diet,
    Measurement
}//bucket