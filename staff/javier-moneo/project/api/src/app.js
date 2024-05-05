import express from 'express';
import morgan from 'morgan';

import { createRoles } from './libs/initialSetup.js';

import pkg from '../package.json' assert { type: 'json' };
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

createRoles();

app.set('pkg', pkg);

app.use(express.json());
app.use(morgan('dev')); // sirve para depurar, para que muestre en consola las peticiones

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

export default app;
