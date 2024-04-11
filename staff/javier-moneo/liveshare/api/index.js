import mongodb from 'mongodb';

const { MongoClient, ObjectId } = mongodb;

const client = new MongoClient('mongodb://localhost:27017');

client
  .connect()
  .then((connection) => {
    const db = connection.db('test');

    const users = db.collection('users');
    const posts = db.collection('posts');

    // function registerUser(
    //   name,
    //   birthdate,
    //   email,
    //   username,
    //   password,
    //   callback
    // ) {
    //   // TODO: input validation

    //   users.findOne({ $or: [{ email }, { username }] }).then((user) => {
    //     if (user) {
    //       callback(new Error('user already exists'));

    //       return;
    //     }

    //     user = { name, birthdate, email, username, password };

    //     users
    //       .insertOne(user)
    //       .then(() => callback(null))
    //       .catch((error) => callback(error));
    //   });
    // }

    // registerUser(
    //   'Uno',
    //   '2000-01-01',
    //   'uno@gmail.com',
    //   'uno',
    //   '12345678',
    //   (error) => {
    //     if (error) {
    //       console.error(error);
    //       return;
    //     }

    //     console.log('user registered');
    //   }
    // );

    // console.log('continue after registerUser call');

    // //------------------------------
    // function loginUser(username, password, callback) {
    //   users
    //     .findOne({ username })
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('User not found with username and password'));
    //         return;
    //       }

    //       if (user.password !== password) {
    //         callback(new Error('User not found with username and password'));
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
    //   users
    //     .findOne({ _id: new ObjectId(userId) })
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('User not found with userId'));
    //         return;
    //       }

    //       delete user._id;
    //       delete user.email;
    //       delete user.password;

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

    // function createPost(author, image, text, callback) {
    //   // TODO: input validation

    //   users
    //     .findOne({ _id: new ObjectId(author) })
    //     .then((user) => {
    //       if (!user) {
    //         callback(new Error('User not found with userId'));
    //         return;
    //       }

    //       const newPost = {
    //         author: user._id,
    //         date: new Date(),
    //         image,
    //         text,
    //       };
    //       posts
    //         .insertOne(newPost)
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

    function retrievePosts(userId, callback) {
      // TODO input validations

      users
        .findOne({ _id: new ObjectId(userId) })
        .then((user) => {
          if (!user) {
            callback(new Error('user not found'));

            return;
          }

          let errorHappened = false;
          let postsProcessedCount = 0;

          posts
            .find({})
            .toArray()
            .then((posts) => {
              posts.forEach((post) => {
                users
                  .findOne(
                    { _id: post.author },
                    { projection: { username: 1 } }
                  )
                  .then((user) => {
                    if (errorHappened) return;

                    if (!user) {
                      callback(new Error('owner user not found'));

                      errorHappened = true;

                      return;
                    }

                    post.id = post._id.toString();
                    delete post._id;

                    const author = {
                      id: post.author.toString(),
                      username: user.username,
                    };

                    post.author = author;

                    postsProcessedCount++;

                    if (postsProcessedCount === posts.length)
                      callback(null, posts);
                  })
                  .catch((error) => callback(error));
              });
            })
            .catch((error) => callback(error));
        })
        .catch((error) => callback(error));
    }

    retrievePosts('6616a62cc474d0650d18fbae', (error, posts) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log('posts retrieved', posts);
    });

    console.log('continue after retrievePosts call');
  })

  .catch((error) => console.error(error));
