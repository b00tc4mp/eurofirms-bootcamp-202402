import VoteComment from '../models/VoteComment.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';
import User from '../models/User.js';
import Edition from '../models/Edition.js';
import Search from '../models/Search.js';
import Comment from '../models/Comment.js';

const { ContentError, DuplicityError, MatchError, RangeError, TypeError } =
  errors;

export const createVoteComment = async (req, res) => {
  try {
    const userOwnerVoteId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { commentId, isVoteUp } = req.body;

    validate.id(commentId);
    validate.boolean(isVoteUp);

    const comment = await Comment.findById(commentId).populate('search').exec();
    if (!comment) {
      throw new MatchError('No comment found');
    }
    console.log(comment);

    const voteComment = await VoteComment.findOne({
      comment: comment._id,
      user: userOwnerVoteId,
    });

    if (voteComment) {
      voteComment.isVoteUp = isVoteUp;
      await voteComment.save();

      return res.status(200).send();
    }

    const newVoteComment = new VoteComment({
      comment: comment._id,
      edition: comment.search.edition,
      tag: comment.search.tag,
      searcher: comment.search.searcher,
      searchType: comment.search.searchType,
      search: comment.search,
      user: userOwnerVoteId,
      isVoteUp: isVoteUp,
    });

    const newVoteCommentSaved = await newVoteComment.save();

    return res.status(200).send();
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError ||
      error instanceof DuplicityError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};
