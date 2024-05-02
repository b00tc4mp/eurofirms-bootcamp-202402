import { User, Post } from '../data/index.js';
import { errors, validate } from 'com';

const { SystemError, MatchError } = errors;

function retrievePostsFromUser(userId, targetUserId) {
  validate.id(userId, 'userId');
  validate.id(targetUserId, 'targetUserId');

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new MatchError('user not found');

      return User.findById(targetUserId)
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((targetUser) => {
          if (!targetUser) throw new MatchError('user not found');

          return Post.find({ author: targetUserId })
            .select('-__v')
            .populate('author', 'username')
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
    });
}

export default retrievePostsFromUser;
