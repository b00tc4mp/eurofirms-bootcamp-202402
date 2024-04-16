import mongoose, { trusted } from 'mongoose';
import express from 'express';
import logic from './logic/index.js';

// test es la base de datos
mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('DB connected');
    const server = express();

    server.get('/', (req, res) => res.json({ hello: 'client' }));

    const jsonBodyParser = express.json(); // JSON.parse(...)

    server.post('/users', jsonBodyParser, (req, res) => {
      try {
        const { name, birthdate, email, username, password } = req.body;

        logic
          .registerUser(name, birthdate, email, username, password)
          .then(() => res.status(201).send())
          .catch((error) =>
            res
              .status(500)
              .json({ error: error.constructor.name, message: error.message })
          );
      } catch (error) {
        res
          .status(500)
          .json({ error: error.constructor.name, message: error.message });
      }
    });

    server.post('/users/auth', jsonBodyParser, (req, res) => {
      try {
        const { username, password } = req.body;

        logic
          .authenticateUser(username, password)
          .then((userId) => res.status(200).json(userId))
          .catch((error) =>
            res
              .status(500)
              .json({ error: error.constructor.name, message: error.message })
          );
      } catch (error) {
        res
          .status(500)
          .json({ error: error.constructor.name, message: error.message });
      }
    });

    server.get('/users/:targetUserId', (req, res) => {
      try {
        // const authorization = req.headers.authorization
        const { authorization } = req.headers;

        const userId = authorization.slice(7);

        //const targetUserId = req.params.targetUserId
        const { targetUserId } = req.params;

        logic
          .retrieveUser(userId, targetUserId)
          .then((user) => res.json(user))
          .catch((error) =>
            res
              .status(500)
              .json({ error: error.constructor.name, message: error.message })
          );
      } catch (error) {
        res
          .status(500)
          .json({ error: error.constructor.name, message: error.message });
      }
    });

    server.post('/posts', jsonBodyParser, (req, res) => {
      try {
        const { authorization } = req.headers;

        const userId = authorization.slice(7);

        const { image, text } = req.body;

        logic
          .createPost(userId, image, text)
          .then(() => res.status(201).send())
          .catch((error) =>
            res
              .status(500)
              .json({ error: error.constructor.name, message: error.message })
          );
      } catch (error) {
        res
          .status(500)
          .json({ error: error.constructor.name, message: error.message });
      }
    });

    server.get('/posts', (req, res) => {
      try {
        const { authorization } = req.headers;

        const userId = authorization.slice(7);

        logic
          .retrievePosts(userId)
          .then((posts) => res.json(posts))
          .catch((error) =>
            res
              .status(500)
              .json({ error: error.constructor.name, message: error.message })
          );
      } catch (error) {
        res
          .status(500)
          .json({ error: error.constructor.name, message: error.message });
      }
    });

    server.listen(8080, () => console.log('API started'));
  })
  .catch((error) => console.error(error));
