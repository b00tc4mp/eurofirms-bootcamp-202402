import mongoose from "mongoose"

const { Schema, model } = mongoose;
const { Types: { ObjectId }} = Schema;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    surnames: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ["student","company"]
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    },
    activity: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = model("user", user);

//Bucket
export {
    User
}