import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const { Types: { ObjectId } } = Schema;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
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
        enum: ['regular', 'admin']
    }
})

const event = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['event', 'training'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type : Date,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        enum: [1, 2, 3],
        default: 1
    },
    address: {
        type: String,
    },
    subscribers: {
        type: [ObjectId],
        ref: 'User'
    },
    status: {
        type : String,
        enum: ['active', 'cancelled'],
        required: true,
        default: 'active'
    },
})

const User = model('User', user)
const Event = model('Event', event)

export {
    User,
    Event
}
