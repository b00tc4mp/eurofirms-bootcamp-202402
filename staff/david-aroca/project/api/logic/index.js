import registerUser from './registerUser.js'
import registerTrainer from './registerTrainer.js'

import authenticateUser from './authenticateUser.js'

import retrieveUser from './retrieveUser.js'
import retrieveUsers from './retrieveUsers.js'

import createExercise from './createExercise.js'
import createDiet from './createDiet.js'
import createMeasurements from './createMeasurements.js'

import removeDiet from './removeDiet.js'
import removeExercise from './removeExercise.js'
import removeMeasurements from './removeMeasurements.js'

import retrieveExercises from './retrieveExercise.js'
import retrieveDiet from './retrieveDiet.js'
import retrieveMeasurements from './retrieveMeasurements.js'

import modifyExercise from './modifyExercise.js'
import modifyDiet from './modifyDiet.js'
import modifyMeasurements from './modifyMeasurements.js'

import searchExercise from './searchExercise.js'
import searchDiet from './searchDiet.js'
import searchMeasurements from './searchMeasurements.js'

const logic = {
    registerUser,
    registerTrainer,
    authenticateUser,
    retrieveUser,
    createExercise,
    createDiet,
    removeDiet,
    removeExercise,
    retrieveExercises,
    retrieveDiet,
    modifyExercise,
    modifyDiet,
    createMeasurements,
    removeMeasurements,
    retrieveMeasurements,
    modifyMeasurements,
    searchExercise,
    searchDiet,
    searchMeasurements,
    retrieveUsers
}

export default logic