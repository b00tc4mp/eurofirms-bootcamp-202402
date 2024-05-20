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
    day: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    },

})

const User = model('User', user)
const Event = model('Event', event)

export {
    User,
    Event
}
