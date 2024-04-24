import mongodb from "mongodb"
import express from "express"

const { MongoClient, ObjectId } = mongodb;

const client = new MongoClient('mongodb://localhost:27017');


client.connect()
  .then(connection => {
    const db = connection.db('test');

    const users = db.collection('users');
    const posts = db.collection('posts');

    function registerUser(name, birthdate, email, username, password, callback) {

      users.findOne({ $or: [{ username }, { email }] })
        .then((user) => {
          if (user) {
            callback(new Error("user already exists"));

            return;
          }

          user = { name, birthdate, email, username, password };

          users.insertOne(user)
            .then(() => callback(null))
            .catch((error) => callback(error));
        })
        .catch((error) => callback(error));
    }

    //Insertamos un usuario. El último parámetro es el callback
    /* registerUser("Adrián", "1989-04-25", "adrianmi.info@gmail.com", "Adrianmi", "12345678",
      (error) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log("user registered");
      });
    console.log("continue after registered call");
 */
    function loginUser(username, password, callback) {
      users.findOne({ username })
        .then((user) => {
          if (!user || password !== user.password) {
            callback(new Error("no valid credetials"));

            return;
          }

          callback(null, user._id.toString());
        })
        .catch((error) => callback(error));
    }

    /* loginUser("Adrianmi", "12345678", (error, userId) => {
      if (error) {
        console.error(error);

        return;
      }
      console.log("user logged In", userId);
    });
    console.log("continue after logged in"); */

    function retrieveUser(userId, callback) {

      users.findOne({ _id: new ObjectId(userId) })
        .then((user) => {
          if (!user) {

            callback(new Error("user not found"))
            return;
          }

          //sanitize. Los delete no serían necesarios si usamos el filtro projection (filtrado para mongodb)
          delete user._id;
          delete user.email;
          delete user.password;
          callback(null, user);
        })
    }

    //Mostramos un usuario pasándole su ID. El último parámetro es el callback
    /* retrieveUser("661548e5ae1b17b2e116c9b7", (error, user) => {
      if (error) {

        console.error(error);
        return;
      }
      console.log('User retrieved')
      console.log(user)
    }) */

    //console.log("continue after retrieved call");

    function createPost(userId, image, text, callback) {

      //TODO input validation
      users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
          if (!user) {

            callback(new Error("User not found"));
            return;
          }

          const post = {
            author: user._id,
            image,
            text,
            date: new Date
          }

          posts.insertOne(post)
            .then(() => callback(null))
            .catch(error => callback(error));
        })
        .catch(error => callback(error));
    }

    /* createPost("6618df34e4fca262cd8dd038", "https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png", "De Adrianmi", error => {
      if (error) {

        console.error(error);
        return;
      }

      console.log("Post creado!");
    }) */

    //console.log("Continue alfer createPost call");

    function retrievePosts(userId, callback) {

      //TODO input validations
      users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
          if (!user) {

            callback(new Error("User not found"));
            return;
          }

          let errorHappened = false;
          let postsProcessedCount = 0;

          posts.find({}).toArray()
            .then(posts => {
              posts.forEach(post => {
                users.findOne({ _id: post.author }, { projection: { username: true } })
                  .then(user => {
                    if (errorHappened) return;

                    if (!user) {

                      callback(new Error("owner user not found"))
                      errorHappened = true;
                      return;
                    }

                    post.id = post._id.toString();
                    delete post._id;  

                    const author = {
                      id: post.author.toString(), // Ponen en esta propiedad estas dos propiedades
                      username: user.username
                    }

                    post.author = author;

                    postsProcessedCount++;

                    if (postsProcessedCount === posts.length)
                      callback(null, posts);
                  })
                  .catch(error => callback(error));
              })
            })
            .catch(error => callback(error));
        })
        .catch(error => callback(error))
    }

    //Mostramos todos los posts de un usuario
    /* retrievePosts('6617c3ad89de5e9374288e40', (error, posts) => {
      if (error) {

        console.error(error);
        return;
      }

      console.log("Retrieved posts", posts);
    }) */

    //console.log("Continue after retrievePosts call");

    function retrievePost(userId, postId, callback) {

      //TODO input validations
      users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
          if (!user) {

            callback(new Error("User not found"));
            return;
          }

          posts.findOne({ _id: new ObjectId(postId) })
            .then(post => {
              if (!post) {

                callback(new Error("Post not found"))
                return;
              }

              users.findOne({ _id: post.author }, { projection: { username: true } })
                .then(user => {
                  if (!user) {
                    callback(new Error("owner user not found"))

                    return;
                  }

                  post.id = post._id.toString();
                  delete post._id;

                  const author = {
                    id: post.author.toString(),
                    username: user.username
                  }

                  post.author = author;

                  callback(null, post)
                })
                .catch(error => callback(error));
            })
            .catch(error => callback(error));
        })
        .catch(error => callback(error));
    }

    //Mostramos un post específico de un usuario
    /* retrievePost("6618df34e4fca262cd8dd038", "6618ef3fc119a9a38a734db1", (error, post) => {
      if (error) {
        console.error(error);

        return;
      }

      console.log("Retrieved post", post);
    })

    console.log("Continue after retrievePost call"); */

    //Usando el framework express como servidor 
    const server = express();

    server.get("/",(req, res) => res.json({ hello: "Client"}));

    server.get("/users/:userId", (req, res) => {
        const userId = req.params.userId;

        retrieveUser(userId, (error, user) => {
            if(error){

                res.status(404).json({ error: error.constructor.name, message: error.message });
                return;
            }

            res.json(user);
        })
    });

    server.get("/posts", (req, res) => {

        const userId = req.headers.authorization; 
        retrievePosts(userId, (error, posts) => {
            if(error){

              res.status(404).json({ error: error.constructor.name, message: error.message })
              return;
            }

            res.status(200).json(posts);
        })
    })

    const jsonBodyParser = express.json();

    server.post('/users', jsonBodyParser, (req, res) => {
      const user = req.body

      registerUser(user.name, user.birthdate, user.email, user.username, user.password, error => {
          if (error) {
              res.status(404).json({ error: error.constructor.name, message: error.message })

              return;
          }

          res.status(201).send()
      })
  })

    //Puede servir para editar un dato de un campo
    server.post("/login", jsonBodyParser, (req, res) => {

      const userActive = req.body;

      loginUser(userActive.username, userActive.password, (error, userId) => {
          if(error){
            console.log(error);  
            res.status(404).json({ error: error.constructor.name, message: error.message });
            return;
          }

          res.status(200).json(userId);
      })

    })

    server.listen(8080, () => console.log("API started"));
  })
  .catch((error) => console.error(error));