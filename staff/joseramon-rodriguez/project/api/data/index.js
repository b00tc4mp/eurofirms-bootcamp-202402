import mongoose from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
    birthdate: {
        type: Date,
        required: true
    },
    wallet: {
        type: Number,
        min: 0
    }
})

const player = new Schema({
    name: {
        type: String
    }
})

const event = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    players: {
        type: Array,
        required: true
    },
    winner: {
        type: ObjectId
    },
    endDate: {
        type: Date,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'closed']
    }
})

const bet = new Schema({
    event: {
        type: ObjectId,
        required: true
    },
    player: {
        type: ObjectId,
        required: true
    },
    user: {
        type: ObjectId,
        required: true
    },
    amount: {
        type: Number,
        min: 1
    }
})

const User = model('User', user)
const Player = model('Player', player)
const Event = model('Event', event)
const Bet = model('Bet', bet)

export {
    User,
    Player,
    Event,
    Bet
}