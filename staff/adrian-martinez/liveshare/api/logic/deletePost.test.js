import mongoose from "mongoose"
import deletePost from "./deletePost.js"

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        try{
            deletePost("66224af9cb2992f34165c8dc","6627d84d61602b1961d0d539")
            .then(() => console.log("post deleted"))
            .catch(error => console.error(error))
        }
        catch(error){
            console.error(error)
        }
    })