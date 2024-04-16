function retrievePosts(userId, callback) {
    // TODO input validations

    users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            let errorHappened = false
            let postsProcessedCount = 0

            posts.find({}).toArray()
                .then(posts => {
                    posts.forEach(post => {
                        users.findOne({ _id: post.author }, { projection: { username: 1 } })
                            .then(user => {
                                if (errorHappened) return

                                if (!user) {
                                    callback(new Error('owner user not found'))

                                    errorHappened = true

                                    return
                                }

                                post.id = post._id.toString()
                                delete post._id

                                const author = {
                                    id: post.author.toString(),
                                    username: user.username
                                }

                                post.author = author

                                postsProcessedCount++

                                if (postsProcessedCount === posts.length)
                                    callback(null, posts)
                            })
                            .catch(error => callback(error))
                    })
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

export default retrievePosts