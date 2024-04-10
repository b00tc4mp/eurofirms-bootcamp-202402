import mongodb from "mongodb";

const { MongoClient, ObjectId } = mongodb;

const client = new MongoClient("mongodb://localhost:27017");

client
  .connect()
  .then((connection) => {
    const db = connection.db("test");

    const users = db.collection("users");

    function registerUser(
      name,
      lastname,
      birthdate,
      email,
      username,
      password,
      callback
    ) {
      users
        .findOne({ $or: [{ username }, { email }] })
        .then((user) => {
          if (user) {
            callback(new Error("user already exists"));

            return;
          }

          user = { name, lastname, birthdate, email, username, password };
          users
            .insertOne(user)
            .then(() => callback(null))
            .catch((error) => callback(error));
        })
        .catch((error) => callback(error));
    }
    registerUser("Lola", "Garcia", "2000-01-01", "lolagarcia@gmail.com", "lola", "123123123",
      (error) => {
        if (error) {
          console.error(error);

          return;
        }
        console.log("user registered");
      }
    );
    console.log("continue after resgistered call");

    function loginUser(username, password, callback) {
      users
        .findOne({ username, password })
        .then((user) => {
          if (!user) {
            callback(new Error("no valid credetials"));

            return;
          }

          callback(null, user._id.toString());
        })
        .catch((error) => callback(error));
    }

    loginUser("Luis", "124124124", (error, userId) => {
      if (error) {
        console.error(error);

        return;
      }
      console.log("user logged In", userId);
    });
    console.log("continue after logged in");

    function retrieveUser(userId, callback) {
      users.findOne({ _id: new ObjectId(userId) })
        .then((user) => {
          if (!user) {
            callback(new Error('user not found'))

            return
          }
          delete user._id
          delete user.password

          callback(null, user)
        })
    }

    retrieveUser('661548e5ae1b17b2e116c9b7', (error, user) => {
      if (error) {
        console.error(error)

        return
      }
      console.log('USERDATA')
      console.log(user)
    })

    console.log('continue after retrieve user')
  })

  .catch((error) => console.error(error));
