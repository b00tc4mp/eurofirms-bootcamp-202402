import { User, Post } from "../data/index.js";

function deleteUser(userId, postId) {
  return User.findById(userId)
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((user) => {
      if (!user) throw new Error("user not found");

      return Post.findById(postId);
    })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((post) => {
      if (!post) throw new Error("Post not found");

      if (post.author.toString() !== userId) throw new Error("This post does not belong to user");

      return Post.deleteOne({_id: postId});
    })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then(() => { });
}

export default deleteUser;
