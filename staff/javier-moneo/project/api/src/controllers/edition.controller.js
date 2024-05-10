import Edition from '../models/Edition.js';
import errors from '../libs/com/errors.js';

const { ContentError, DuplicityError, MatchError } = errors;

export const getEditions = async (req, res) => {
  try {
    const editions = await Edition.find({}, '-_id', {
      sort: { name: 1 },
    })
      .populate('language', '-_id')
      .populate('country', '-_id')
      .exec();

    return res.json(editions);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const getEditionByCode = async (req, res) => {
  try {
    const code = req.params.code;
    // console.log(code);

    const edition = await Edition.findOne({ code: code }).lean().exec();

    // console.log(edition);
    if (!edition) {
      throw new MatchError('Edition no found');
    }

    if (edition._id) {
      edition.id = edition._id;
      delete edition._id;
    }

    return res.json(edition);
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
