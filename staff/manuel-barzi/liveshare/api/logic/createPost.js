function createPost(userId, image, text, callback) {
    // TODO input validation

    users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            const post = {
                author: user._id,
                image,
                text,
                date: new Date
            }

            posts.insertOne(post)
                .then(() => callback(null))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

export default createPost