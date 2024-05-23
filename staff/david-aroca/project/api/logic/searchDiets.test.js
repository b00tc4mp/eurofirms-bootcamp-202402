import mongoose from "mongoose";
import searchDiets from "./searchDiets.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            searchDiets('663a3b1bd26a81d7178f9043', 'prubea')
                .then(diet => console.log('diet finded', diet))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })



// diet finded [
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       title: 'ESTO ES UNA PRUBEA123123123',
//       image: 'https://media3.giphy.com/media/l1AsC986MBVsQPckg/200.webp?cid=ecf05e477a56yazxpag36u64lw8utt3jqsvscvpcrddjix6m&ep=v1_gifs_search&rid=200.webp&ct=g',
//       video: 'https://youtu.be/m6GUoN-IcEM',
//       description: ' 1-Batido de Proteínas Energizante: Este batido es una excelente opción para comenzar tu día o para recargar después de un entrenamiento intenso. Combina una porción de proteína en polvo de tu sabor favorito con
//   leche de almendras, plátano, mantequilla de maní y un puñado de espinacas frescas. Licúa todo hasta que esté suave
//   y disfruta de una explosión de energía y proteínas.\n' +
//         '\n' +
//         '3-Ensalada de Quinoa con Pollo a la Parrilla: Esta ensalada es una comida completa y satisfactoria. Cocina la quinoa según las instrucciones del paquete y déjala enfriar. Agrega dados de pollo a la parrilla, tomates cherry
//   cortados por la mitad, pepino en rodajas, aguacate en cubos y un puñado de espinacas frescas. Adereza con un aliño
//   de tu elección y mezcla bien para obtener una deliciosa y abundante fuente de proteínas.\n' +
//         '\n' +
//         '2-Tazón de Salmón Asado con Verduras al Vapor: Este tazón es una explosión de sabor y nutrientes. Asa filetes de salmón sazonados con limón, ajo y hierbas frescas en el horno hasta que estén tiernos y ligeramente dorados. Acompaña con una variedad de verduras al vapor como brócoli, zanahorias y coliflor. Sirve sobre arroz integral o quinoa para una comida completa y equilibrada cargada de proteínas.\n' +
//         '\n' +
//         '4-Hamburguesas de Pavo y Espinacas: Estas hamburguesas son una opción saludable y deliciosa para satisfacer
//   tus antojos de comida rápida. Mezcla carne de pavo molida con espinacas picadas, cebolla rallada, ajo picado y condimentos al gusto. Forma las hamburguesas y ásalas a la parrilla o en una sartén hasta que estén cocidas por completo. Sirve en pan integral con tus toppings favoritos para una cena abundante y alta en proteínas.\n' +
//         '\n' +
//         '5-Tortitas de Avena y Claras de Huevo: Estas tortitas son ideales para un desayuno rápido y nutritivo. Mezcla claras de huevo con avena, polvo de proteína, canela y un poco de leche de almendras hasta obtener una masa homogénea. Cocina las tortitas en una sartén antiadherente hasta que estén doradas por ambos lados. Sirve con yogur griego, frutas frescas y un chorrito de miel para un desayuno lleno de proteínas y sabor.',
//       id: '6645ccd3c17705817965563a'
//     }
//   ]
