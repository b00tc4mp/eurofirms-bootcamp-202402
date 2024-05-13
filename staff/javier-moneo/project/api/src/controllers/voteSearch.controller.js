import VoteSearch from '../models/VoteSearch.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';
import User from '../models/User.js';
import Edition from '../models/Edition.js';
import Search from '../models/Search.js';

const { ContentError, DuplicityError, MatchError, RangeError, TypeError } =
  errors;

export const createVoteSearch = async (req, res) => {
  try {
    const userOwnerVoteId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { searchId, isVoteUp } = req.body;

    validate.id(searchId);
    validate.boolean(isVoteUp);

    const search = await Search.findById(searchId);
    if (!search) {
      throw new MatchError('No search found');
    }

    const voteSearch = await VoteSearch.findOne({
      search: search._id,
      user: userOwnerVoteId,
    });

    if (voteSearch) {
      voteSearch.isVoteUp = isVoteUp;
      await voteSearch.save();

      return res.status(200).send();
    }

    const newVoteSearch = new VoteSearch({
      tag: search.tag._id,
      edition: search.edition._id,
      searcher: search.searcher._id,
      searchType: search.searchType._id,
      search: searchId,
      user: userOwnerVoteId,
      isVoteUp: isVoteUp,
    });

    const newVoteSearchSaved = await newVoteSearch.save();

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
