import { validate, errors } from "com";

const { SystemError, MatchError } = errors;

import { User, Post } from "../data/index.js";

function retrievePosts(userId) {
  validate.id(userId);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new MatchError("user not found");

      return Post.find()
        .select("-__v")
        .populate("author", "username")
        .lean()
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((posts) => {
          posts.forEach((post) => {
            if (post._id) {
              post.id = post._id.toString();

              delete post._id;
            }
            if (post.author._id) {
              post.author.id = post.author._id.toString();

              delete post.author._id;
            }
          });

          return posts.reverse();
        });
    });
}

export default retrievePosts;
