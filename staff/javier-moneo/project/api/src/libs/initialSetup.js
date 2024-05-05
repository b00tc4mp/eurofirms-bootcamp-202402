import Role from '../models/Role.js';

// cuando se inicia la aplicación se crean estos roles si no existen.
export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return; // si no hay ningun rol creado en db

    const values = await Promise.all([
      new Role({ name: 'user' }).save(),
      new Role({ name: 'moderator' }).save(),
      new Role({ name: 'admin' }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
