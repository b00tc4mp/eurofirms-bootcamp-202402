import mongoose, { trusted } from 'mongoose';
import express from 'express';

const { Schema, model } = mongoose;

const {
  Types: { ObjectId },
} = Schema;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const post = new Schema({
  author: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const User = model('User', user);
const Post = model('Post', post);

mongoose
  .connect('mongodb://localhost:27017/test') // test es la base de datos
  .then((connection) => {
    function registerUser(name, birthdate, email, username, password) {
      // TODO: input validation

      return User.findOne({ $or: [{ email }, { username }] })
        .catch((error) => {
          throw new Error(error.message);
        })
        .then((user) => {
          if (user) {
            throw new Error('user already exists');
          }

          user = { name, birthdate, email, username, password };

          return User.create(user);
        })
        .then((user) => {});
    }

    // try {
    //   registerUser('tres', '2000-01-01', 'tres@gmail.com', 'tres', '12345678')
    //     .then(() => console.log('user registered'))
    //     .catch((error) => console.error(error));
    // } catch (error) {
    //   console.error(error);
    // }

    // console.log('continue after registerUser call');

    // //------------------------------
    // function loginUser(username, password, callback) {
    //   // TODO input validation

    //   users
    //     .findOne({ username })
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('user not found'));

    //         return;
    //       }

    //       if (user.password !== password) {
    //         callback(new Error('wrong credentials'));

    //         return;
    //       }

    //       callback(null, user._id.toString());
    //     })
    //     .catch((error) => callback(error));
    // }

    // loginUser('uno', '12345678', (error, userId) => {
    //   if (error) {
    //     console.error(error);

    //     return;
    //   }

    //   console.log('user logged in', userId);
    // });

    // console.log('continue after loginUser call');

    // //---------------------------------
    // function retrieveUser(userId, callback) {
    //   // TODO input validation

    //   users
    //     .findOne(
    //       { _id: new ObjectId(userId) },
    //       { projection: { _id: 0, birthdate: 0, email: 0, password: 0 } }
    //     )
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('user not found'));

    //         return;
    //       }

    //       // sanitize (not needed if using projection)
    //       // delete user._id
    //       // delete user.email
    //       // delete user.password

    //       callback(null, user);
    //     })
    //     .catch((error) => callback(error));
    // }

    // retrieveUser('6616a62cc474d0650d18fbae', (error, user) => {
    //   if (error) {
    //     console.error(error);

    //     return;
    //   }

    //   console.log('user found', user);
    // });
    // console.log('continue after retrieveUser call');

    // //---------------------------------

    // function createPost(userId, image, text, callback) {
    //   // TODO input validation

    //   users
    //     .findOne({ _id: new ObjectId(userId) })
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('user not found'));

    //         return;
    //       }

    //       const post = {
    //         author: user._id,
    //         image,
    //         text,
    //         date: new Date(),
    //       };

    //       posts
    //         .insertOne(post)
    //         .then(() => callback(null))
    //         .catch((error) => callback(error));
    //     })
    //     .catch((error) => callback(error));
    // }

    // createPost(
    //   '6616a62cc474d0650d18fbae',
    //   'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZlcHlraXB6dmltODd4NXJlM2l3cHJvbnkzanptMGdsM2o4dTQwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e8D8XV9fWrpF6/giphy.gif',
    //   'Este es el texto final',
    //   (error) => {
    //     if (error) {
    //       console.error(error);
    //       return;
    //     }

    //     console.log('post created');
    //   }
    // );

    // console.log('continue after createPost call');

    //----------------------------------------

    // function retrievePosts(userId, callback) {
    //   // TODO input validations

    //   users
    //     .findOne({ _id: new ObjectId(userId) })
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('user not found'));

    //         return;
    //       }

    //       let errorHappened = false;
    //       let postsProcessedCount = 0;

    //       posts
    //         .find({})
    //         .toArray()
    //         .then((posts) => {
    //           posts.forEach((post) => {
    //             users
    //               .findOne(
    //                 { _id: post.author },
    //                 { projection: { username: 1 } }
    //               )
    //               .then((user) => {
    //                 if (errorHappened) return;

    //                 if (!user) {
    //                   callback(new Error('owner user not found'));

    //                   errorHappened = true;

    //                   return;
    //                 }

    //                 post.id = post._id.toString();
    //                 delete post._id;

    //                 const author = {
    //                   id: post.author.toString(),
    //                   username: user.username,
    //                 };

    //                 post.author = author;

    //                 postsProcessedCount++;

    //                 if (postsProcessedCount === posts.length)
    //                   callback(null, posts);
    //               })
    //               .catch((error) => callback(error));
    //           });
    //         })
    //         .catch((error) => callback(error));
    //     })
    //     .catch((error) => callback(error));
    // }

    // retrievePosts('6616a62cc474d0650d18fbae', (error, posts) => {
    //   if (error) {
    //     console.error(error);
    //     return;
    //   }

    //   console.log('posts retrieved', posts);
    // });

    // console.log('continue after retrievePosts call');

    //------------------------------------------

    // function retrievePost(userId, postId, callback) {
    //   users
    //     .findOne({ _id: new ObjectId(userId) })
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('user not found'));
    //         return;
    //       }

    //       posts
    //         .findOne({ _id: new ObjectId(postId) })
    //         .then((post) => {
    //           users
    //             .findOne({
    //               _id: post.author,
    //             })
    //             .then((userAuthor) => {
    //               if (!userAuthor) {
    //                 callback(new Error('author not found'));
    //               }
    //               post.id = post._id.toString();
    //               delete post._id;

    //               const author = {
    //                 id: post.author.toString(),
    //                 username: userAuthor ? userAuthor.username : 'unknown',
    //               };
    //               post.author = author;

    //               callback(null, post);
    //             })
    //             .catch((error) => callback(error));
    //         })
    //         .catch((error) => callback(error));
    //     })
    //     .catch((error) => callback(error));
    // }

    // // userId, postId
    // retrievePost(
    //   '6616a62cc474d0650d18fbae',
    //   '6617e6c930e9691b13da7ba2',
    //   (error, post) => {
    //     if (error) {
    //       console.error(error);
    //       return;
    //     }

    //     console.log('post retrieved', post);
    //   }
    // );

    // console.log('continue after retrievePost call');

    // ###################### SERVER ##########################
    const server = express();

    server.get('/', (req, res) => res.json({ hello: 'client' }));

    // server.get('/users/:userId', (req, res) => {
    //   const userId = req.params.userId;

    //   retrieveUser(userId, (error, user) => {
    //     if (error) {
    //       res
    //         .status(404)
    //         .json({ error: error.constructor.name, message: error.message });
    //       return;
    //     }
    //     res.json(user);
    //   });
    // });

    const jsonBodyParser = express.json(); // JSON.parse(...)

    server.post('/users', jsonBodyParser, (req, res) => {
      const { name, birthdate, email, username, password } = req.body;

      try {
        registerUser(name, birthdate, email, username, password)
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

    // server.post('/login', jsonBodyParser, (req, res) => {
    //   const user = req.body;

    //   loginUser(user.username, user.password, (error) => {
    //     if (error) {
    //       res
    //         .status(400)
    //         .json({ error: error.constructor.name, message: error.message });

    //       return;
    //     }

    //     res.status(200).json({
    //       error: null,
    //       data: 'exito bienvenido',
    //     });
    //   });
    // });

    // server.get('/posts', (req, res) => {
    //   const userId = req.headers.authorization;

    //   retrievePosts(userId, (error, posts) => {
    //     if (error) {
    //       res
    //         .status(404)
    //         .json({ error: error.constructor.name, message: error.message });
    //       return;
    //     }
    //     res.status(200).json(posts);
    //   });
    // });

    // server.get('/posts/:postId', (req, res) => {
    //   const userId = req.headers.authorization;
    //   const postId = req.params.postId;

    //   retrievePost(userId, postId, (error, post) => {
    //     if (error) {
    //       res
    //         .status(404)
    //         .json({ error: error.constructor.name, message: error.message });
    //       return;
    //     }
    //     res.status(200).json(post);
    //   });
    // });

    // //---------------------------------
    server.listen(8080, () => console.log('Api started'));
  })

  .catch((error) => console.error(error));
