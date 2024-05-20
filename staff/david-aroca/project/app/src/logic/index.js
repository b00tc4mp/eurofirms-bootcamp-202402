import loginUser from "./loginUser"
import registerUser from "./registerUser"
import registerTrainer from "./registerTrainer"

import retrieveUser from "./retrieveUser"
import isUserLoggedIn from "./isUserLoggedIn"
import logoutUser from "./logoutUser"
import getLoggedInUserRole from "./getLoggedInUserRole"

import createExercise from "./createExercise"
import createDiet from "./createDiet"
import createMeasurement from "./createMeasurement"

import modifyDiet from "./modifyDiet"
import modifyExercise from "./modifyExercise"
import modifyMeasurement from "./modifyMeasurement"

import removeDiet from "./removeDiet"
import removeExercise from "./removeExercise"
import removeMeasurement from "./removeMeasurement"

import retrieveDiet from "./retrieveDiet"
import retrieveExercises from "./retrieveExercises"
import retrieveMeasurement from "./retrieveMeasurement"

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
    retrieveDiet,
    retrieveExercises,
    retrieveMeasurement,
    registerTrainer
}

export default logic