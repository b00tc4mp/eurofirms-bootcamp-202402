import mongoose from "mongoose";
import retrieveAllMeasurements from "./retrieveAllMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveAllMeasurements('663a3b1bd26a81d7178f9043')
                .then(measuremets => console.log('retrieved measure', measuremets))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })