import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'

import createExercise from './createExercise.js'
import createDiet from './createDiet.js'
import createMeasurement from './createMeasurement.js'

import removeDiet from './removeDiet.js'
import removeExercise from './removeExercise.js'
import removeMeasurement from './removeMeasurement.js'

import retrieveExercises from './retrieveExercise.js'
import retrieveDiet from './retrieveDiet.js'
import retrieveMeasurement from './retrieveMeasurement.js'

import modifyExercise from './modifyExercise.js'
import modifyDiet from './modifyDiet.js'
import modifyMeasurement from './modifyMeasurement.js'

import searchExercise from './searchExercise.js'
import searchDiet from './searchDiet.js'
import searchMeasurement from './searchMeasurement.js'

const logic = {
    registerUser,
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
    createMeasurement,
    removeMeasurement,
    retrieveMeasurement,
    modifyMeasurement,
    searchExercise,
    searchDiet,
    searchMeasurement,
}

export default logic