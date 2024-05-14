import Search from '../models/Search.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';
import Comment from '../models/Comment.js';

const { ContentError, DuplicityError, MatchError } = errors;

export const createComment = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken
    // console.log('createComment: userId', userId);
    // console.log(req.body)

    const { searchId, text } = req.body;

    validate.id(searchId);
    validate.text(text);

    const search = await Search.findById(searchId);

    if (!search) {
      throw new MatchError('No search found');
    }

    const newComment = new Comment({
      search: searchId,
      user: userId,
      text: text,
      isBanned: false,
    });

    const commentSaved = await newComment.save();

    return res.status(201).send();
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const getCommentsBySearchId = async (req, res) => {
  try {
    const { searchId } = req.params;

    validate.id(searchId);

    const comments = await Comment.find({
      search: searchId,
      isBanned: false,
    })
      .sort({ createdAt: 1 }) // los nuevos son los ultimos
      .populate('user', '_id username')
      .lean()
      .exec();

    if (comments) {
      comments.map((comment) => {
        if (comment._id) {
          comment.id = comment._id;
          delete comment._id;
        }

        if (comment.user?._id) {
          comment.user.id = comment.user._id;
          delete comment.user._id;
        }
      });
    }

    return res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};
