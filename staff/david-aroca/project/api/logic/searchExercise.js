import { User, Exercise } from "../data/index.js";
import { errors, validate } from "com";

const { SystemError, MatchError } = errors

function searchExercise(userId, searchQuery) {
    validate.id(userId, 'userId')
    // validate.text(searchQuery, 'searchQuery')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) { throw new MatchError('user not found') }

            return Exercise.find({ "title": { "$regex": searchQuery, "$options": "i" } }).select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(exercise => {
                    if (!exercise || exercise.length === 0) { throw new MatchError('exercise not found') }

                    exercise.forEach(exercise => {
                        exercise.id = exercise._id.toString()
                        delete exercise._id

                        if (exercise.author._id) {
                            exercise.author.id = exercise.author._id.toString()

                            delete exercise.author._id
                        }
                    })
                    return exercise
                })

        })
}

export default searchExercise



// SI EL USUARIO EXISTE, SE PROCEDE A BUSCAR EJERCICIOS CUYO TÍTULO COINCIDA CON LA CONSULTA DE BÚSQUEDA(searchQuery).
// SE USA UNA EXPRESIÓN REGULAR (REGEX) PARA PERMITIR BÚSQUEDAS INSENSIBLES A MAYÚSCULAS Y MINÚSCULAS (OPCIÓN "i").
// SE EXCLUYE EL CAMPO '__v' DE LOS RESULTADOS Y SE POBLA EL CAMPO 'author' CON EL NOMBRE DE USUARIO ('username').
// SE USA EL MÉTODO 'lean()' PARA OBTENER OBJETOS JAVASCRIPT PUROS EN LUGAR DE DOCUMENTOS MONGOOSE.
// EN CASO DE ERROR DURANTE LA BÚSQUEDA, SE LANZA UN 'SystemError' CON EL MENSAJE DEL ERROR.
