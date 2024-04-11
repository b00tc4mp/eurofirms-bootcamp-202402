import mongodb from 'mongodb';

const { MongoClient, ObjectId } = mongodb;

const client = new MongoClient('mongodb://localhost:27017');

client
  .connect()
  .then((connection) => {
    const db = connection.db('test');

    const users = db.collection('users');
    const posts = db.collection('posts');

    function registerUser(
      name,
      birthdate,
      email,
      username,
      password,
      callback
    ) {
      // TODO: input validation

      users.findOne({ $or: [{ email }, { username }] }).then((user) => {
        if (user) {
          callback(new Error('user already exists'));

          return;
        }

        user = { name, birthdate, email, username, password };

        users
          .insertOne(user)
          .then(() => callback(null))
          .catch((error) => callback(error));
      });
    }

    registerUser(
      'Uno',
      '2000-01-01',
      'uno@gmail.com',
      'uno',
      '12345678',
      (error) => {
        if (error) {
          console.error(error);
          return;
        }

        console.log('user registered');
      }
    );

    console.log('continue after registerUser call');

    //------------------------------
    function loginUser(username, password, callback) {
      users
        .findOne({ username })
        .then((user) => {
          if (!user) {
            callback(new Error('User not found with username and password'));
            return;
          }

          if (user.password != password) {
            callback(new Error('User not found with username and password'));
            return;
          }

          callback(null, user._id.toString());
        })
        .catch((error) => callback(error));
    }

    loginUser('uno', '12345678', (error, userId) => {
      if (error) {
        console.error(error);

        return;
      }

      console.log('user logged in', userId);
    });

    console.log('continue after loginUser call');

    //---------------------------------
    function retrieveUser(userId, callback) {
      users
        .findOne({ _id: new ObjectId(userId) })
        .then((user) => {
          if (!user) {
            callback(new Error('User not found with userId'));
            return;
          }

          delete user._id;
          delete user.password;

          callback(null, user);
        })
        .catch((error) => callback(error));
    }

    retrieveUser('6616a62cc474d0650d18fbae', (error, user) => {
      if (error) {
        console.error(error);

        return;
      }

      console.log('user found', user);
    });
    console.log('continue after retrieveUser call');

    //---------------------------------

    function createPost(author, date, image, text, callback) {
      // TODO: input validation
      const post = { author: new ObjectId(author), date, image, text };

      posts
        .insertOne(post)
        .then(() => callback(null))
        .catch((error) => callback(error));
    }

    createPost(
      '6616a62cc474d0650d18fbae',
      '2000-01-01',
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZlcHlraXB6dmltODd4NXJlM2l3cHJvbnkzanptMGdsM2o4dTQwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e8D8XV9fWrpF6/giphy.gif',
      'Este es el texto',
      (error) => {
        if (error) {
          console.error(error);
          return;
        }

        console.log('post created');
      }
    );

    console.log('continue after createPost call');
  })
  .catch((error) => console.error(error));
