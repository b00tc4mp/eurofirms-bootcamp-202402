import MenuSearchTag from '../models/MenuSearchTag.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';

const { ContentError, DuplicityError, MatchError, TypeError, RangeError } =
  errors;

// TODO: creo que este no se usa
export const getMenuSearchTagsByEditionIdAndSearchTypeId = async (req, res) => {
  try {
    const editionId = req.params.editionId;
    const searchTypeId = req.params.searchTypeId;
    console.log(editionId);
    const menuSearchTags = await MenuSearchTag.find(
      {
        edition: editionId,
        searchType: searchTypeId,
      },
      '-createdAt -updatedAt',
      {
        sort: { index: 1 },
      }
    );

    if (!menuSearchTags) {
      return res.status(400).json({ message: 'MenuSearchTags no found' });
    }

    return res.json(menuSearchTags);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const getByEditionIdAndSearchTypeId = async (req, res) => {
  try {
    const { editionId, searchTypeId } = req.body;
    console.log(editionId, searchTypeId);
    validate.id(editionId);
    validate.id(searchTypeId);

    const menuSearchTags = await MenuSearchTag.find(
      { edition: editionId, searchType: searchTypeId },
      '-createdAt -updatedAt',
      {
        sort: { index: 1 },
      }
    )
      .populate('edition', '_id code name')
      .populate('tag', '_id name')
      .populate('searchType', '_id name')
      .lean()
      .exec();

    if (menuSearchTags) {
      menuSearchTags.map((menuSearchTag) => {
        if (menuSearchTag._id) {
          menuSearchTag.id = menuSearchTag._id;
          delete menuSearchTag._id;
        }

        if (menuSearchTag.edition?._id) {
          menuSearchTag.edition.id = menuSearchTag.edition._id;
          delete menuSearchTag.edition._id;
        }

        if (menuSearchTag.tag?._id) {
          menuSearchTag.tag.id = menuSearchTag.tag._id;
          delete menuSearchTag.tag._id;
        }

        if (menuSearchTag.searchType?._id) {
          menuSearchTag.searchType.id = menuSearchTag.searchType._id;
          delete menuSearchTag.searchType._id;
        }
      });
    }

    return res.status(200).json(menuSearchTags);
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof MatchError ||
      error instanceof ContentError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};
