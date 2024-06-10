// import open, { openApp, apps } from 'open';
import { sertuxGetUrl } from './engine.js';

// const myUrl = new URL('https://www.google.es/search');

// myUrl.searchParams.append('q', 'Esta es la camiseta');
// await open('https://google.com', {
//   app: {
//     name: apps.chrome,
//   },
// });
// let urlString = sertuxGetUrl('es', 'google', 'web', 'camiseta azul');
// let urlStringBing = sertuxGetUrl('es', 'bing', 'web', 'camiseta roja');
let urlStringBing = sertuxGetUrl('es', 'giphy', 'gifs', 'camiseta roja');
console.log(urlStringBing);
// await open(urlString, { app: { name: 'firefox' } });
