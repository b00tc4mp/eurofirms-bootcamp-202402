import { client } from '.';

client.connect()
    .then(connection => {
        const db = connection.db('test');

        const users = db.collection('users');

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

        registerUser()(error); {
            if (error) {
                console.error(error);

                return;
            }
            console.log("user registered");
        }
    }
    );
