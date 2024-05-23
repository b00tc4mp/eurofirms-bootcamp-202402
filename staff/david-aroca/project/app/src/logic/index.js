import loginUser from "./loginUser"
import registerUser from "./registerUser"
import registerTrainer from "./registerTrainer"

import retrieveUser from "./retrieveUser"

import isUserLoggedIn from "./isUserLoggedIn"
import logoutUser from "./logoutUser"
import getLoggedInUserRole from "./getLoggedInUserRole"
import getLoggedInUserId from "./getLoggedInUserId"

import createExercise from "./createExercise"
import createDiet from "./createDiet"
import createMeasurement from "./createMeasurements"

import modifyDiet from "./modifyDiet"
import modifyExercise from "./modifyExercise"
import modifyMeasurement from "./modifyMeasurements"

import removeDiet from "./removeDiet"
import removeExercise from "./removeExercise"
import removeMeasurement from "./removeMeasurements"
import removeUser from "./removeUser"

import retrieveDiets from "./retrieveDiets"
import retrieveExercises from "./retrieveExercises"
import retrieveMeasurements from "./retrieveMeasurements"
import retrieveAllMeasurements from "./retrieveAllMeasurements"
import retrieveUsers from "./retrieveUsers"
import retrieveTrainees from "./retrieveTrainees"
import retrieveTrainer from "./retrieveTrainer"


import searchDiets from "./searchDiets"
import searchExercises from "./SearchExercises"
import searchMeasures from "./searchMeasures"


const logic = {
    loginUser,
    registerUser,
    retrieveUser,
    isUserLoggedIn,
    logoutUser,
    getLoggedInUserRole,
    createDiet,
    createExercise,
    createMeasurement,
    modifyDiet,
    modifyExercise,
    modifyMeasurement,
    removeDiet,
    removeExercise,
    removeMeasurement,
    retrieveDiets,
    retrieveExercises,
    retrieveMeasurements,
    registerTrainer,
    retrieveUsers,
    searchDiets,
    searchExercises,
    searchMeasures,
    retrieveAllMeasurements,
    getLoggedInUserId,
    retrieveTrainees,
    retrieveTrainer,
    removeUser
}

export default logic