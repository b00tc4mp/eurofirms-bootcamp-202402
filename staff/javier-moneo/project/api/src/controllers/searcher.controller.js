import Searcher from '../models/Searcher.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';

const { ContentError, DuplicityError, MatchError } = errors;

export const getSearchers = async (req, res) => {
  try {
    const searchers = await Searcher.find({ isActive: true }, '', {
      sort: { name: 1 },
    })
      .populate('searcherType')
      .populate('searchTypes')
      .lean()
      .exec();

    if (!searchers) {
      return res.status(400).json({ message: 'Searchers no found' });
    }

    searchers.map((searcher) => {
      if (searcher._id) {
        searcher.id = searcher._id;
        delete searcher._id;
      }

      if (searcher.searcherType?._id) {
        searcher.searcherType.id = searcher.searcherType._id;
        delete searcher.searcherType._id;
      }

      if (searcher.searchTypes) {
        searcher.searchTypes.map((searchType) => {
          if (searchType._id) {
            searchType.id = searchType._id;
            delete searchType._id;
          }
        });
      }
    });

    return res.json(searchers);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const getSearcherByName = async (req, res) => {
  try {
    const name = req.params.name;
    // console.log(name);

    const searcher = await Searcher.findOne({ name: name })
      .populate('searcherType')
      .populate('searchTypes')
      .lean()
      .exec();

    // console.log(searcher);
    if (!searcher) {
      return res.status(404).json({ message: 'Searcher no found' });
    }

    if (searcher._id) {
      searcher.id = searcher._id;
      delete searcher._id;
    }
    if (searcher.searcherType._id) {
      searcher.searcherType.id = searcher.searcherType._id;
      delete searcher.searcherType._id;
    }

    searcher.searchTypes.map((searchType) => {
      searchType.id = searchType._id;
      delete searchType._id;
    });

    return res.json(searcher);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const getSearcherById = async (req, res) => {
  try {
    const searcherId = req.params.searcherId;
    // console.log(name);

    const searcher = await Searcher.findById(searcherId)
      .populate('searcherType')
      .populate('searchTypes')
      .lean()
      .exec();

    // console.log(searcher);
    if (!searcher) {
      throw new MatchError('Searcher no found');
    }

    if (searcher._id) {
      searcher.id = searcher._id;
      delete searcher._id;
    }
    if (searcher.searcherType._id) {
      searcher.searcherType.id = searcher.searcherType._id;
      delete searcher.searcherType._id;
    }

    searcher.searchTypes.map((searchType) => {
      searchType.id = searchType._id;
      delete searchType._id;
    });

    return res.json(searcher);
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
