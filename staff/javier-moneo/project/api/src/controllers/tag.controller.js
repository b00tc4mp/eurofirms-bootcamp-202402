import Tag from '../models/Tag.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';

const { ContentError, DuplicityError, MatchError } = errors;

export const getTagByNameAndEditionId = async (req, res) => {
  try {
    const { name, editionId } = req.body;
    validate.id(editionId);
    validate.tagName(name);

    const tag = await Tag.findOne({ edition: editionId, name: name })
      .lean()
      .exec();

    if (!tag) {
      throw new MatchError('Tag no found');
    }

    if (tag._id) {
      tag.id = tag._id;
      delete tag._id;
    }

    return res.status(200).json(tag);
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

export const getTagByTagId = async (req, res) => {
  try {
    const { tagId } = req.params;
    validate.id(tagId);

    const tag = await Tag.findById(tagId)
      .populate('edition', '_id code name')
      .lean()
      .exec();

    if (!tag) {
      throw new MatchError('Tag no found');
    }

    if (tag._id) {
      tag.id = tag._id;
      delete tag._id;
    }

    if (tag.edition?._id) {
      tag.edition.id = tag.edition._id;
      delete tag.edition._id;
    }

    return res.status(200).json(tag);
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
