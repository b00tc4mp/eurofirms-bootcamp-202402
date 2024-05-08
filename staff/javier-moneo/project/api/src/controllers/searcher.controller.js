import Searcher from '../models/Searcher.js';

export const getSearchers = async (req, res) => {
  try {
    const searchers = await Searcher.find({ isActive: true }, '-_id', {
      sort: { name: 1 },
    })
      .populate('searcherType', '-_id')
      .populate('searchTypes', '-_id')
      .exec();

    return res.json(searchers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
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
    return res.status(500).json({ message: error.message });
  }
};
