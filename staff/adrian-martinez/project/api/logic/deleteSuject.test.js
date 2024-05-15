import mongoose from "mongoose"
import deleteSuject from "./deleteSuject.js"

mongoose.connect("mongodb://localhost:27017/FormativeLife")
    .then(() => {
        try{
            deleteSuject("66438c365125edae3eadfbe1","66447c2b5c7de81361ed0e7d")
            .then(() => console.log("Subject deleted"))
            .catch(error => console.error(error))
        }
        catch(error){
            console.error(error)
        }
    })