import MenuSearchType from '../models/MenuSearchType.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';

const { ContentError, DuplicityError, MatchError, TypeError, RangeError } =
  errors;

export const getMenuSearchTypesByEditionAndSearcher = async (req, res) => {
  try {
    const editionId = req.params.editionId;
    const searcherId = req.params.searcherId;
    // console.log({ editionId, searcherId });

    const menuSearchTypes = await MenuSearchType.find(
      {
        edition: editionId,
        searcher: searcherId,
      },
      '-createdAt -updatedAt',
      {
        sort: { index: 1 },
      }
    )
      .populate('searchType')
      .lean()
      .exec();

    menuSearchTypes.map((menuSearchType) => {
      if (menuSearchType._id) {
        menuSearchType.id = menuSearchType._id;
        delete menuSearchType._id;
      }

      if (menuSearchType.searchType?._id) {
        menuSearchType.searchType.id = menuSearchType.searchType._id;
        delete menuSearchType.searchType._id;
      }
    });

    return res.json(menuSearchTypes);
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
