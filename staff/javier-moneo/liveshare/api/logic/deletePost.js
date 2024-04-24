import { User, Post } from '../data/index.js';

function deletePost(userId, postId) {
  // TODO input validation

  return User.findById(userId)
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((user) => {
      if (!user) {
        throw new Error('user not found');
      }

      return Post.findById(postId)
        .catch((error) => {
          throw new Error(error.message);
        })
        .then((post) => {
          if (!post) {
            throw new Error('post not found');
          }

          if (post.author.toString() !== userId) {
            throw new Error('userId is not the owner of the post');
          }

          return Post.findByIdAndDelete(postId).catch((error) => {
            throw new Error('error deleting post');
          });
        });
    });
}

export default deletePost;
