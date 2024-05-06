import mongoose from "mongoose"

const { Schema, model } = mongoose;
const { Types: { ObjectId }} = Schema;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    surNames: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ["company", "student"],
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
    }
})

const User = model("User", user);

//Bucket
export {
    User
}