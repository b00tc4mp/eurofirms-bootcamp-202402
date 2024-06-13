import mongoose from "mongoose";
import searchExercises from "./searchExercises.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            searchExercises('663a3b1bd26a81d7178f9043', 'muerto')
                .then(exercise => console.log('exercise finded', exercise))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })


// logica funciona correctamente
// {
//     author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//     title: 'COMO HACER PESO MUERTO',
//         image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczJiMjdsNG5jZnc5aG5qcjF0YWdoNWc1Zm91aG9tOGFybDM4OTF6NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SVNP800QoYcJZx1Wqx/giphy.webp',
//             video: 'https://youtu.be/7Sjfm61-HC4',
//                 description: 'Introducción\n' +
//                     '\n' +
//                     'En este video, aprenderás a realizar correctamente el ejercicio de peso muerto, uno de los movimientos esenciales en el entrenamiento de fuerza. Verás la técnica adecuada, los rangos de repeticiones óptimos y el peso recomendado para diferentes niveles. También incluimos algunos consejos para obtener los mejores resultados y evitar lesiones.\n' +
//                     '\n' +
//                     'Técnica del Peso Muerto\n' +
//                     '\n' +
//                     'Posición Inicial:\n' +
//                     '\n' +
//                     'Coloca los pies a la anchura de las caderas.\n' +
//                     'La barra debe estar sobre el empeine de los pies.\n' +
//                     'Agáchate y agarra la barra con las manos un poco más abiertas que los hombros.\n' +
//                     'Mantén la espalda recta y el pecho hacia afuera.\n' +
//                     'Levantamiento:\n' +
//                     '\n' +
//                     'Empuja con los talones mientras extiendes las piernas.\n' +
//                     'Mantén la barra cerca del cuerpo mientras te levantas.\n' +
//                     'Extiende completamente las caderas y las rodillas al final del levantamiento.\n' +
//                     'Descenso:\n' +
//                     '\n' +
//                     'Baja la barra lentamente invirtiendo el movimiento.\n' +
//                     'Mantén la espalda recta y flexiona las caderas y las rodillas.\n' +
//                     'Rangos de Repeticiones Óptimos\n' +
//                     '\n' +
//                     'Fuerza: 3-5 repeticiones por serie.\n' +
//                     'Masa muscular: 6-12 repeticiones por serie.\n' +
//                     'Resistencia muscular: 12-15 repeticiones por serie.\n' +
//                     'Peso Recomendado\n' +
//                     '\n' +
//                     'Principiantes: Empieza con una barra vacía (20 kg/45 lbs) o menos. Enfócate en la técnica.\n' +
//                     'Intermedios: Aumenta el peso gradualmente. Trabaja con un peso que te permita hacer 6-8 repeticiones con buena forma.\n' +
//                     'Avanzados: Incrementa el peso de manera controlada. Realiza 3-5 repeticiones por serie con buena técnica.\n' +
//                     'Consejos Generales\n' +
//                     '\n' +
//                     'Calentamiento: Siempre calienta antes de empezar.\n' +
//                     'Técnica Primero: Prioriza la técnica sobre el peso.\n' +
//                     'Progresión Gradual: Aumenta el peso poco a poco.\n' +
//                     'Uso de Cinturón: Considera usar un cinturón para levantar pesos pesados.\n' +
//                     'Descanso y Recuperación: Descansa adecuadamente entre series y días de entrenamiento.\n' +
//                     'Conclusión\n' +
//                     '\n' +
//                     'El peso muerto es clave para desarrollar fuerza y músculo. Sigue estos pasos y consejos para incorporarlo de manera segura y efectiva en tu rutina. ¡Mira el video para una demostración completa!',
//                     id: '6645c6c4c1770581796555df'
// }
//     ]