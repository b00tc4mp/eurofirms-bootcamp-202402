import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// creación de base de datos con datos iniciales
import { createRoles } from './libs/initialSetup.js';
import {
  createLanguages,
  createCountries,
  createEditions,
  createSearchTypes,
  createSearcherTypes,
  createSearcher,
  createTags,
  createTagAggregators,
  createSearchUrls,
  createMenuSearchTags,
  createMenuSearchTypes,
} from './libs-data/initialSetupData.js';

import pkg from '../package.json' assert { type: 'json' };
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import editionRoutes from './routes/edition.routes.js';
import searcherRoutes from './routes/searcher.routes.js';
import menuSearchTypeRoutes from './routes/menuSearchType.routes.js';
import menuSearchTagRoutes from './routes/menuSearchTag.routes.js';
import searchTypeRoutes from './routes/searchType.routes.js';
import searchRoutes from './routes/search.routes.js';
import tagRoutes from './routes/tag.routes.js';
import reportSearchRoutes from './routes/reportSearch.routes.js';
import reportUserRoutes from './routes/reportUser.routes.js';
import reportTagRoutes from './routes/reportTag.routes.js';
import reportCommentRoutes from './routes/reportComment.routes.js';
import voteSearchRoutes from './routes/voteSearch.routes.js';
import voteCommentRoutes from './routes/voteComment.routes.js';
import commentRoutes from './routes/comment.routes.js';

const app = express();

// creación de base de datos con datos iniciales
// NO CAMBIAR EL ORDEN DE EJECUCION
console.log('initialSetups.js starting to create data');
await createRoles();
console.log('initialSetupsData.js starting to create data');
await createLanguages();
await createCountries();
await createEditions();
await createSearchTypes();
await createSearcherTypes();
await createSearcher();
await createTags();
await createTagAggregators();
await createSearchUrls();
await createMenuSearchTags();
await createMenuSearchTypes();

app.set('pkg', pkg);

app.use(express.json());
app.use(morgan('dev')); // sirve para depurar, para que muestre en consola las peticiones

// var whitelist = ['http://localhost:5173', 'http://example2.com']; // front page

// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/editions', editionRoutes);
app.use('/api/searchers', searcherRoutes);
app.use('/api/menuSearchTypes', menuSearchTypeRoutes);
app.use('/api/menuSearchTags', menuSearchTagRoutes);
app.use('/api/searchTypes', searchTypeRoutes);
app.use('/api/searches', searchRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/reportSearches', reportSearchRoutes);
app.use('/api/reportUsers', reportUserRoutes);
app.use('/api/reportTags', reportTagRoutes);
app.use('/api/reportComments', reportCommentRoutes);
app.use('/api/voteSearches', voteSearchRoutes);
app.use('/api/voteComments', voteCommentRoutes);
app.use('/api/comments', commentRoutes);

export default app;
