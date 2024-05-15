import mongoose from 'mongoose'
import createSubject from './createSubject.js'

mongoose.connect('mongodb://127.0.0.1:27017/FormativeLife')
    .then(() => {
        try {
            createSubject('66438c365125edae3eadfbe1', "Desenvolvemento Servidor", 5, "Saqué un 5 por qué la parte del Backend me cuesta mucho más que el Frontend. Esta asignatura la saqué en la segunda convocatoria, ya que trabajaba por las mañanas y no tenía tanto tiempo como me gustaría para practicar la lógica de los lenguajes servidor, que para mí es hay mucha más lógica que en el Frontend. Hay mucho más cálculo y hasta que no te vaya todo bien no se te muestran los resultados, a diferencia con el Frontend.")
                .then(() => console.log('Subject created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })