import mongoose from "mongoose";
import searchWork from "./searchWork.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            searchWork('6638e0bb69b2a40c667637a1', 'exercise')
                .then(works => console.log('works finded', works))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })