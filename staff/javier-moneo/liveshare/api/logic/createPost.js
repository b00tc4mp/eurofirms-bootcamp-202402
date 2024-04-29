import { User, Post } from '../data/index.js';
import { errors, validate } from 'com';

const { SystemError, MatchError } = errors;

function createPost(userId, image, text) {
  validate.id(userId, 'userId');
  validate.text(image);
  validate.text(text);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new MatchError('user not found');

      const post = {
        author: user._id,
        image,
        text,
        date: new Date(),
      };

      return Post.create(post).catch((error) => {
        throw new SystemError(error.message);
      });
    })
    .then((post) => {});
}

export default createPost;
