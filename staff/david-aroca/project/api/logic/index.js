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
import removeUser from './removeUser.js'

import retrieveExercises from './retrieveExercises.js'
import retrieveDiets from './retrieveDiets.js'
import retrieveMeasurements from './retrieveMeasurements.js'
import retrieveAllMeasurements from './retrieveAllMeasurements.js'
import retrieveTrainees from './retrieveTrainees.js'
import retrieveTrainer from './retrieveTrainer.js'

import modifyExercise from './modifyExercise.js'
import modifyDiet from './modifyDiet.js'
import modifyMeasurements from './modifyMeasurements.js'

import searchExercises from './searchExercises.js'
import searchDiets from './searchDiets.js'
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
    retrieveDiets,
    modifyExercise,
    modifyDiet,
    createMeasurements,
    removeMeasurements,
    retrieveMeasurements,
    modifyMeasurements,
    searchExercises,
    searchDiets,
    searchMeasurements,
    retrieveUsers,
    retrieveAllMeasurements,
    retrieveTrainees,
    retrieveTrainer,
    removeUser
}

export default logic